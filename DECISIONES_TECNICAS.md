
---

### 2. Archivo: `DECISIONES_TECNICAS.md`
Crea un archivo con el nombre exacto `DECISIONES_TECNICAS.md` en la raíz (junto al README) y pega esto:

```markdown
# Decisiones Técnicas y Arquitectura

## 1. ¿Dónde se implementaron las reglas de negocio?
Las reglas de negocio se implementaron en la capa de **Aplicación (Casos de Uso)**. 
* **Validaciones numéricas** (ej. `valorSolicitado > 0`) están en `CrearCreditoUseCase`.
* **Máquina de estados** (ej. evitar pasar de RECHAZADO a DESEMBOLSADO) está en `CambiarEstadoUseCase`.
* **Justificación:** Al aislar estas reglas del framework (Express) y de la base de datos (Prisma), el código es altamente testeable (como se demostró con Jest) y fácil de mantener.

## 2. Estrategia del Webhook y el Patrón Outbox
Para cumplir con el requisito de notificar a un sistema externo sin bloquear la creación del crédito ni duplicar lógica, se implementó el **Outbox Pattern** usando **Unit of Work**.
* **Flujo:** Al crear un crédito, en una sola transacción atómica se guarda el crédito y se registra un evento en la tabla `WebhookOutbox` con estado `PENDIENTE`.
* **Worker:** Un proceso en segundo plano lee la tabla y hace el POST al sistema externo.
* **Resiliencia:** Si el sistema externo falla, el Worker no borra el registro. Lo marca con un error y calcula un `proximoIntento` (backoff exponencial), asegurando la entrega eventual.

## 3. Auditoría e Inmutabilidad
* Se creó la tabla `HistorialCredito` que guarda: estado anterior, estado nuevo, usuario y observación en cada cambio.
* **Información inmutable:** Una vez creado el crédito, el `numeroCredito`, `createdBy` y `fechaSolicitud` no deben modificarse bajo ninguna circunstancia. El identificador `id` es la llave primaria y nunca cambia.

## 4. Seguridad
Se implementó **JWT (JSON Web Tokens)**. La ruta `/api/auth/login` genera un token firmado. Un middleware intercepta las peticiones a `/api/creditos` y `/api/clientes`, verificando la firma y expiración del token antes de permitir el acceso.

## 5. Escalabilidad (Pregunta de 500 a 500.000 créditos)
Si el sistema debe manejar un volumen masivo, la arquitectura actual (Monolito Modular) escalaría así:
1. **Backend Stateless:** Levantar múltiples instancias de Node.js detrás de un Load Balancer.
2. **Base de Datos:** Implementar Réplicas de Lectura (Read Replicas) para consultas GET y particionamiento de tablas por año/mes.
3. **Colas de Mensajería:** Reemplazar el Worker en memoria por colas robustas como RabbitMQ o AWS SQS.
4. **Caché:** Implementar Redis para almacenar los catálogos (Tipos de Crédito, Estados) y evitar consultar la base de datos en cada petición.