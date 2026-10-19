BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[TipoCliente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigo] VARCHAR(50) NOT NULL,
    [descripcion] VARCHAR(100) NOT NULL,
    [activo] BIT NOT NULL CONSTRAINT [TipoCliente_activo_df] DEFAULT 1,
    [fechaRegistro] DATETIME2 NOT NULL CONSTRAINT [TipoCliente_fechaRegistro_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [TipoCliente_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [TipoCliente_codigo_key] UNIQUE NONCLUSTERED ([codigo])
);

-- CreateTable
CREATE TABLE [dbo].[TipoDocumento] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigo] VARCHAR(20) NOT NULL,
    [descripcion] VARCHAR(100) NOT NULL,
    [activo] BIT NOT NULL CONSTRAINT [TipoDocumento_activo_df] DEFAULT 1,
    [fechaRegistro] DATETIME2 NOT NULL CONSTRAINT [TipoDocumento_fechaRegistro_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [TipoDocumento_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [TipoDocumento_codigo_key] UNIQUE NONCLUSTERED ([codigo])
);

-- CreateTable
CREATE TABLE [dbo].[TipoCredito] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigo] VARCHAR(50) NOT NULL,
    [descripcion] VARCHAR(100) NOT NULL,
    [activo] BIT NOT NULL CONSTRAINT [TipoCredito_activo_df] DEFAULT 1,
    CONSTRAINT [TipoCredito_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [TipoCredito_codigo_key] UNIQUE NONCLUSTERED ([codigo])
);

-- CreateTable
CREATE TABLE [dbo].[EstadoCredito] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigo] VARCHAR(30) NOT NULL,
    [descripcion] VARCHAR(100) NOT NULL,
    CONSTRAINT [EstadoCredito_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [EstadoCredito_codigo_key] UNIQUE NONCLUSTERED ([codigo])
);

-- CreateTable
CREATE TABLE [dbo].[MetodoPago] (
    [id] INT NOT NULL IDENTITY(1,1),
    [codigo] VARCHAR(50) NOT NULL,
    [descripcion] VARCHAR(100) NOT NULL,
    CONSTRAINT [MetodoPago_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [MetodoPago_codigo_key] UNIQUE NONCLUSTERED ([codigo])
);

-- CreateTable
CREATE TABLE [dbo].[Cliente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [documento] VARCHAR(20) NOT NULL,
    [nombres] VARCHAR(100) NOT NULL,
    [apellidos] VARCHAR(100) NOT NULL,
    [idTipoDocumento] INT NOT NULL,
    [idTipoCliente] INT NOT NULL,
    [activo] BIT NOT NULL CONSTRAINT [Cliente_activo_df] DEFAULT 1,
    [fechaRegistro] DATETIME2 NOT NULL CONSTRAINT [Cliente_fechaRegistro_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Cliente_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Cliente_idTipoDocumento_documento_key] UNIQUE NONCLUSTERED ([idTipoDocumento],[documento])
);

-- CreateTable
CREATE TABLE [dbo].[Asesor] (
    [id] INT NOT NULL IDENTITY(1,1),
    [documento] VARCHAR(20) NOT NULL,
    [nombre] VARCHAR(100) NOT NULL,
    [activo] BIT NOT NULL CONSTRAINT [Asesor_activo_df] DEFAULT 1,
    CONSTRAINT [Asesor_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Asesor_documento_key] UNIQUE NONCLUSTERED ([documento])
);

-- CreateTable
CREATE TABLE [dbo].[CreditoAsociado] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numeroCredito] VARCHAR(50) NOT NULL,
    [identificacionAsociado] VARCHAR(20) NOT NULL,
    [nombreAsociado] VARCHAR(150) NOT NULL,
    [idCliente] INT NOT NULL,
    [idTipoCred] INT NOT NULL,
    [valorSolicitado] DECIMAL(18,2) NOT NULL,
    [tasaInteres] DECIMAL(9,4) NOT NULL,
    [numeroCuotas] INT NOT NULL,
    [idFormaPago] INT NOT NULL,
    [idEstadoCredito] INT NOT NULL,
    [idAsesor] INT,
    [entidadId] INT NOT NULL CONSTRAINT [CreditoAsociado_entidadId_df] DEFAULT 1,
    [activo] BIT NOT NULL CONSTRAINT [CreditoAsociado_activo_df] DEFAULT 1,
    [createdBy] VARCHAR(100) NOT NULL,
    [updatedBy] VARCHAR(100),
    [fechaSolicitud] DATETIME2 NOT NULL CONSTRAINT [CreditoAsociado_fechaSolicitud_df] DEFAULT CURRENT_TIMESTAMP,
    [fechaActualizacion] DATETIME2 NOT NULL,
    CONSTRAINT [CreditoAsociado_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [CreditoAsociado_numeroCredito_key] UNIQUE NONCLUSTERED ([numeroCredito])
);

-- CreateTable
CREATE TABLE [dbo].[HistorialCredito] (
    [id] INT NOT NULL IDENTITY(1,1),
    [idCredito] INT NOT NULL,
    [estadoAnterior] VARCHAR(30),
    [estadoNuevo] VARCHAR(30) NOT NULL,
    [usuario] VARCHAR(100) NOT NULL,
    [observacion] VARCHAR(500),
    [camposModificados] NVARCHAR(max),
    [fecha] DATETIME2 NOT NULL CONSTRAINT [HistorialCredito_fecha_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [HistorialCredito_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[WebhookOutbox] (
    [id] INT NOT NULL IDENTITY(1,1),
    [eventId] VARCHAR(36) NOT NULL,
    [eventType] VARCHAR(50) NOT NULL,
    [idCredito] INT NOT NULL,
    [payload] NVARCHAR(max) NOT NULL,
    [estado] VARCHAR(20) NOT NULL CONSTRAINT [WebhookOutbox_estado_df] DEFAULT 'PENDIENTE',
    [intentos] INT NOT NULL CONSTRAINT [WebhookOutbox_intentos_df] DEFAULT 0,
    [ultimoError] NVARCHAR(max),
    [fechaCreacion] DATETIME2 NOT NULL CONSTRAINT [WebhookOutbox_fechaCreacion_df] DEFAULT CURRENT_TIMESTAMP,
    [fechaEnvio] DATETIME2,
    CONSTRAINT [WebhookOutbox_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [WebhookOutbox_eventId_key] UNIQUE NONCLUSTERED ([eventId])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Cliente_documento_idx] ON [dbo].[Cliente]([documento]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [CreditoAsociado_identificacionAsociado_idx] ON [dbo].[CreditoAsociado]([identificacionAsociado]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [CreditoAsociado_idEstadoCredito_idx] ON [dbo].[CreditoAsociado]([idEstadoCredito]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [CreditoAsociado_fechaSolicitud_idx] ON [dbo].[CreditoAsociado]([fechaSolicitud]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [CreditoAsociado_entidadId_idEstadoCredito_idx] ON [dbo].[CreditoAsociado]([entidadId], [idEstadoCredito]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [HistorialCredito_idCredito_fecha_idx] ON [dbo].[HistorialCredito]([idCredito], [fecha]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [WebhookOutbox_estado_fechaCreacion_idx] ON [dbo].[WebhookOutbox]([estado], [fechaCreacion]);

-- AddForeignKey
ALTER TABLE [dbo].[Cliente] ADD CONSTRAINT [Cliente_idTipoDocumento_fkey] FOREIGN KEY ([idTipoDocumento]) REFERENCES [dbo].[TipoDocumento]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Cliente] ADD CONSTRAINT [Cliente_idTipoCliente_fkey] FOREIGN KEY ([idTipoCliente]) REFERENCES [dbo].[TipoCliente]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditoAsociado] ADD CONSTRAINT [CreditoAsociado_idCliente_fkey] FOREIGN KEY ([idCliente]) REFERENCES [dbo].[Cliente]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditoAsociado] ADD CONSTRAINT [CreditoAsociado_idTipoCred_fkey] FOREIGN KEY ([idTipoCred]) REFERENCES [dbo].[TipoCredito]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditoAsociado] ADD CONSTRAINT [CreditoAsociado_idFormaPag_fkey] FOREIGN KEY ([idFormaPag]) REFERENCES [dbo].[MetodoPago]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditoAsociado] ADD CONSTRAINT [CreditoAsociado_idEstadoCredito_fkey] FOREIGN KEY ([idEstadoCredito]) REFERENCES [dbo].[EstadoCredito]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditoAsociado] ADD CONSTRAINT [CreditoAsociado_idAsesor_fkey] FOREIGN KEY ([idAsesor]) REFERENCES [dbo].[Asesor]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[HistorialCredito] ADD CONSTRAINT [HistorialCredito_idCredito_fkey] FOREIGN KEY ([idCredito]) REFERENCES [dbo].[CreditoAsociado]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[WebhookOutbox] ADD CONSTRAINT [WebhookOutbox_idCredito_fkey] FOREIGN KEY ([idCredito]) REFERENCES [dbo].[CreditoAsociado]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
