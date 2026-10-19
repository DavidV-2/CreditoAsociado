-- ==========================================
-- 1. Crear base de datos
-- ==========================================
CREATE DATABASE CreditosSolidarios;
GO
USE CreditosSolidarios;
GO

-- ==========================================
-- 2. Catálogos
-- ==========================================

CREATE TABLE TipoCliente (
    id            INT IDENTITY(1,1) NOT NULL,
    codigo        VARCHAR(50)   NOT NULL,
    descripcion   VARCHAR(100)  NOT NULL,
    activo        BIT           NOT NULL CONSTRAINT DF_TipoCliente_activo DEFAULT (1),
    fechaRegistro DATETIME2(3)  NOT NULL CONSTRAINT DF_TipoCliente_fecha DEFAULT (SYSUTCDATETIME()),
    CONSTRAINT PK_TipoCliente PRIMARY KEY (id),
    CONSTRAINT UQ_TipoCliente_codigo UNIQUE (codigo)
);

CREATE TABLE TipoDocumento (
    id            INT IDENTITY(1,1) NOT NULL,
    codigo        VARCHAR(20)   NOT NULL,
    descripcion   VARCHAR(100)  NOT NULL,
    activo        BIT           NOT NULL CONSTRAINT DF_TipoDocumento_activo DEFAULT (1),
    fechaRegistro DATETIME2(3)  NOT NULL CONSTRAINT DF_TipoDocumento_fecha DEFAULT (SYSUTCDATETIME()),
    CONSTRAINT PK_TipoDocumento PRIMARY KEY (id),
    CONSTRAINT UQ_TipoDocumento_codigo UNIQUE (codigo)
);

CREATE TABLE TipoCredito (
    id          INT IDENTITY(1,1) NOT NULL,
    codigo      VARCHAR(50)   NOT NULL,
    descripcion VARCHAR(100)  NOT NULL,
    activo      BIT           NOT NULL CONSTRAINT DF_TipoCredito_activo DEFAULT (1),
    CONSTRAINT PK_TipoCredito PRIMARY KEY (id),
    CONSTRAINT UQ_TipoCredito_codigo UNIQUE (codigo)
);

CREATE TABLE EstadoCredito (
    id          INT IDENTITY(1,1) NOT NULL,
    codigo      VARCHAR(30)   NOT NULL,
    descripcion VARCHAR(100)  NOT NULL,
    activo      BIT           NOT NULL CONSTRAINT DF_EstadoCredito_activo DEFAULT (1),
    CONSTRAINT PK_EstadoCredito PRIMARY KEY (id),
    CONSTRAINT UQ_EstadoCredito_codigo UNIQUE (codigo)
);

CREATE TABLE MetodoPago (
    id          INT IDENTITY(1,1) NOT NULL,
    codigo      VARCHAR(50)   NOT NULL,
    descripcion VARCHAR(100)  NOT NULL,
    activo      BIT           NOT NULL CONSTRAINT DF_MetodoPago_activo DEFAULT (1),
    CONSTRAINT PK_MetodoPago PRIMARY KEY (id),
    CONSTRAINT UQ_MetodoPago_codigo UNIQUE (codigo)
);

-- ==========================================
-- 3. Entidades base
-- ==========================================

CREATE TABLE Cliente (
    id              INT IDENTITY(1,1) NOT NULL,
    documento       VARCHAR(20)   NOT NULL,   
    nombres         VARCHAR(100)  NOT NULL,
    apellidos       VARCHAR(100)  NOT NULL,
    idTipoDocumento INT           NOT NULL,
    idTipoCliente   INT           NOT NULL,
    activo          BIT           NOT NULL CONSTRAINT DF_Cliente_activo DEFAULT (1),
    fechaRegistro   DATETIME2(3)  NOT NULL CONSTRAINT DF_Cliente_fecha DEFAULT (SYSUTCDATETIME()),
    CONSTRAINT PK_Cliente PRIMARY KEY (id),
    CONSTRAINT FK_Cliente_TipoDocumento FOREIGN KEY (idTipoDocumento) REFERENCES TipoDocumento(id),
    CONSTRAINT FK_Cliente_TipoCliente   FOREIGN KEY (idTipoCliente)   REFERENCES TipoCliente(id),
    CONSTRAINT UQ_Cliente_Doc           UNIQUE (idTipoDocumento, documento)
);

CREATE INDEX IX_Cliente_documento ON Cliente(documento);

CREATE TABLE Asesor (
    id        INT IDENTITY(1,1) NOT NULL,
    documento VARCHAR(20)  NOT NULL,
    nombre    VARCHAR(100) NOT NULL,
    activo    BIT          NOT NULL CONSTRAINT DF_Asesor_activo DEFAULT (1),
    CONSTRAINT PK_Asesor PRIMARY KEY (id),
    CONSTRAINT UQ_Asesor_documento UNIQUE (documento)
);

-- ==========================================
-- 4. Entidad principal
-- ==========================================

CREATE TABLE CreditoAsociado (
    id                     INT IDENTITY(1,1) NOT NULL,
    numeroCredito          VARCHAR(50)   NOT NULL,
    identificacionAsociado VARCHAR(20)   NOT NULL,   
    nombreAsociado         VARCHAR(150)  NOT NULL,   
    idCliente              INT           NOT NULL,
    idTipoCredito             INT           NOT NULL,
    valorSolicitado        DECIMAL(18,2) NOT NULL,
    tasaInteres            DECIMAL(9,4)  NOT NULL,   
    numeroCuotas           INT           NOT NULL,
    idFormaPago             INT           NOT NULL,
    idEstadoCredito        INT           NOT NULL,
    idAsesor               INT           NULL,
    entidadId              INT           NOT NULL CONSTRAINT DF_Credito_entidad DEFAULT (1),
    activo                 BIT           NOT NULL CONSTRAINT DF_Credito_activo DEFAULT (1),
    createdBy              VARCHAR(100)  NOT NULL,
    updatedBy              VARCHAR(100)  NULL,
    fechaSolicitud         DATETIME2(3)  NOT NULL CONSTRAINT DF_Credito_fechaSolicitud DEFAULT (SYSUTCDATETIME()),
    fechaActualizacion     DATETIME2(3)  NOT NULL CONSTRAINT DF_Credito_fechaAct DEFAULT (SYSUTCDATETIME()),
    CONSTRAINT PK_CreditoAsociado PRIMARY KEY (id),
    CONSTRAINT UQ_Credito_numero UNIQUE (numeroCredito),
    CONSTRAINT FK_Credito_Cliente       FOREIGN KEY (idCliente)       REFERENCES Cliente(id),
    CONSTRAINT FK_Credito_TipoCredito   FOREIGN KEY (idTipoCredito) REFERENCES TipoCredito(id),
    CONSTRAINT FK_Credito_MetodoPago    FOREIGN KEY (idFormaPago) REFERENCES MetodoPago(id),
    CONSTRAINT FK_Credito_Estado        FOREIGN KEY (idEstadoCredito) REFERENCES EstadoCredito(id),
    CONSTRAINT FK_Credito_Asesor        FOREIGN KEY (idAsesor)        REFERENCES Asesor(id),

    CONSTRAINT CK_Credito_valorPositivo  CHECK (valorSolicitado > 0),
    CONSTRAINT CK_Credito_tasaNoNegativa CHECK (tasaInteres >= 0),
    CONSTRAINT CK_Credito_cuotasPositivas CHECK (numeroCuotas > 0)
);

CREATE INDEX IX_Credito_identificacion ON CreditoAsociado(identificacionAsociado);
CREATE INDEX IX_Credito_estado         ON CreditoAsociado(idEstadoCredito);
CREATE INDEX IX_Credito_fecha          ON CreditoAsociado(fechaSolicitud);
CREATE INDEX IX_Credito_entidad_estado ON CreditoAsociado(entidadId, idEstadoCredito);

-- ==========================================
-- 5. Auditoría y Webhook
-- ==========================================

CREATE TABLE HistorialCredito (
    id                INT IDENTITY(1,1) NOT NULL,
    idCredito         INT           NOT NULL,
    tipoCambio        VARCHAR(30)   NOT NULL DEFAULT 'ESTADO',
    idEstadoAnterior  INT           NULL,
    idEstadoNuevo     INT           NOT NULL,
    estadoAnterior    VARCHAR(30)   NULL,
    estadoNuevo       VARCHAR(30)   NOT NULL,
    usuario           VARCHAR(100)  NOT NULL,
    observacion       VARCHAR(500)  NULL,
    camposModificados NVARCHAR(MAX) NULL,   
    fecha             DATETIME2(3)  NOT NULL CONSTRAINT DF_Historial_fecha DEFAULT (SYSUTCDATETIME()),
    CONSTRAINT PK_HistorialCredito PRIMARY KEY (id),
    CONSTRAINT FK_Historial_Credito FOREIGN KEY (idCredito) REFERENCES CreditoAsociado(id),
    CONSTRAINT FK_Historial_EstadoAnterior FOREIGN KEY (idEstadoAnterior) REFERENCES EstadoCredito(id),
    CONSTRAINT FK_Historial_EstadoNuevo FOREIGN KEY (idEstadoNuevo) REFERENCES EstadoCredito(id)
);

CREATE INDEX IX_Historial_credito_fecha ON HistorialCredito(idCredito, fecha);

CREATE TABLE WebhookOutbox (
    id             INT IDENTITY(1,1) NOT NULL,
    eventId        VARCHAR(36)   NOT NULL,   
    eventType      VARCHAR(50)   NOT NULL,   
    idCredito      INT           NOT NULL,
    entidadId      INT           NOT NULL DEFAULT 1, -- <-- AÑADIDO
    payload        NVARCHAR(MAX) NOT NULL,
    estado         VARCHAR(20)   NOT NULL CONSTRAINT DF_Outbox_estado DEFAULT ('PENDIENTE'),
    intentos       INT           NOT NULL CONSTRAINT DF_Outbox_intentos DEFAULT (0),
    ultimoError    NVARCHAR(MAX) NULL,
    proximoIntento DATETIME2(3)  NOT NULL DEFAULT (SYSUTCDATETIME()), -- <-- AÑADIDO
    fechaCreacion  DATETIME2(3)  NOT NULL CONSTRAINT DF_Outbox_fecha DEFAULT (SYSUTCDATETIME()),
    fechaEnvio     DATETIME2(3)  NULL,
    CONSTRAINT PK_WebhookOutbox PRIMARY KEY (id),
    CONSTRAINT UQ_Outbox_eventId UNIQUE (eventId),
    CONSTRAINT FK_Outbox_Credito FOREIGN KEY (idCredito) REFERENCES CreditoAsociado(id),
    CONSTRAINT CK_Outbox_estado CHECK (estado IN ('PENDIENTE','ENVIADO','FALLIDO'))
);

CREATE INDEX IX_Outbox_estado_fecha ON WebhookOutbox(estado, fechaCreacion);
CREATE INDEX IX_Outbox_estado_proximo ON WebhookOutbox(estado, proximoIntento);

-- ==========================================
-- 6. Secuencia y Datos Semilla
-- ==========================================

CREATE SEQUENCE seq_numero_credito
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    NO CYCLE;
GO

INSERT INTO TipoCliente (codigo, descripcion) VALUES
('ASOCIADO', 'Asociado'),
('NO_ASOCIADO', 'No asociado');

INSERT INTO TipoDocumento (codigo, descripcion) VALUES
('CC', 'Cédula de ciudadanía'),
('CE', 'Cédula de extranjería'),
('NIT', 'NIT'),
('PA', 'Pasaporte');

INSERT INTO TipoCredito (codigo, descripcion) VALUES
('LIBRE_INVERSION', 'Libre inversión'),
('VIVIENDA', 'Vivienda'),
('EDUCACION', 'Educación'),
('MICROCREDITO', 'Microcrédito');

INSERT INTO EstadoCredito (codigo, descripcion) VALUES
('SOLICITADO', 'Solicitado'),
('EN_ESTUDIO', 'En estudio'),
('APROBADO', 'Aprobado'),
('RECHAZADO', 'Rechazado'),
('DESEMBOLSADO', 'Desembolsado'),
('CANCELADO', 'Cancelado');

INSERT INTO MetodoPago (codigo, descripcion) VALUES
('NOMINA', 'Descuento por nómina'),
('EFECTIVO', 'Efectivo'),
('DEBITO_AUTOMATICO', 'Débito automático');
GO