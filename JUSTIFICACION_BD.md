📝 Justificación del Modelo de Base de Datos
1. Llaves Primarias (PK) e Identificadores
Justificación: Se utilizó INT IDENTITY(1,1) como Llave Primaria en todas las tablas.

Por qué: Es el estándar en SQL Server. Es un entero autoincremental, lo que garantiza que sea único, rápido para indexar (Clustered Index por defecto) y eficiente en el almacenamiento. No usamos GUIDs o UUIDs en la BD porque, aunque son buenos para sistemas distribuidos, generan fragmentación en los índices de SQL Server y ocupan más espacio.

Excepción: En la tabla WebhookOutbox, el eventId es un VARCHAR(36). Este sí es un UUID (generado en Node.js) porque es un estándar en los Webhooks para garantizar la idempotencia (que el sistema externo no procese el mismo evento dos veces).

2. Llaves Foráneas (FK) e Integridad Referencial
Justificación: Se definieron FKs explícitas (ej. idCliente en CreditoAsociado apunta a Cliente(id)).

Por qué: Para garantizar la integridad referencial. La base de datos no permitirá crear un crédito para un cliente que no existe. Además, se usan para el modelamiento en estrella (Catálogos vs. Entidades transaccionales).

Borrado Lógico: Para evitar problemas de integridad (si se borra un cliente con créditos), se implementó el campo activo (BIT) en las tablas. Nunca se hace un DELETE físico, sino un UPDATE activo = 0.

3. Tipos de Datos (El punto crítico de la prueba)
Valores Monetarios (valorSolicitado): Se usó DECIMAL(18,2).

Justificación: Es un error fatal usar FLOAT o DOUBLE para dinero, porque estos usan aritmética de punto flotante y generan pérdida de precisión (ej. 0.1 + 0.2 = 0.30000000000000004). DECIMAL es exacto y permite hasta 18 dígitos con 2 decimales (ideal para pesos colombianos).

Tasas de Interés (tasaInteres): Se usó DECIMAL(9,4).

Justificación: Las tasas financieras requieren mayor precisión (hasta 4 decimales) para calcular cuotas exactas sin redondeos que afecten al cliente.

Fechas (fechaSolicitud): Se usó DATETIME2(3).

Justificación: DATETIME antiguo tiene una precisión de 3.33ms y ocupa 8 bytes. DATETIME2(3) permite precisión de milisegundos (3 dígitos) y usa el calendario gregoriano proléptico, siendo el estándar moderno recomendado por Microsoft. Además, se usa SYSUTCDATETIME() para guardar siempre en UTC y evitar problemas de zonas horarias.

4. Índices (Rendimiento)
Justificación: Se crearon índices no agrupados (Non-Clustered) en las columnas más consultadas para acelerar las lecturas:

IX_Credito_identificacion: Acelera la búsqueda cuando el frontend filtra por documento.

IX_Credito_estado: Acelera el dashboard (contar créditos por estado).

IX_Credito_fecha: Optimiza el ordenamiento por fecha (el más reciente primero).

IX_Outbox_estado_fecha e IX_Outbox_estado_proximo: Son vitales para el Worker. Sin ellos, el Worker tendría que escanear toda la tabla cada 15 segundos para encontrar los webhooks pendientes.

5. Restricciones (CHECK Constraints)
Justificación: Se implementaron validaciones a nivel de base de datos (ej. CHECK (valorSolicitado > 0)).

Por qué: Aunque el backend valida con TypeScript, la base de datos es la última línea de defensa. Si alguien se conecta directo a SQL Server e intenta insertar un crédito con valor negativo, la BD lo rechazará. Es el principio de "Defensa en profundidad".

6. Auditoría (HistorialCredito)
Justificación: Se creó una tabla separada para el historial.

Por qué: Los datos financieros son auditables. Se guarda el estado anterior (estadoAnterior), el nuevo (estadoNuevo), quién lo cambió (usuario), cuándo (fecha) y por qué (observacion). Además, se guardan los IDs de estado (idEstadoAnterior, idEstadoNuevo) por si los nombres de los estados cambian en el futuro.