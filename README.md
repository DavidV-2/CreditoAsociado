markdown

# Módulo de Créditos Asociados - Prueba Técnica OPA SAS
Solución completa (Backend + Frontend) para la administración de solicitudes de crédito de asociados, diseñada bajo los principios de Clean Architecture y preparada para entornos de alta transaccionalidad.
## 🏗️ Arquitectura y Tecnologías
* **Backend:** Node.js + TypeScript + Express + Prisma ORM (con Driver Adapter para SQL Server).
* **Frontend:** Angular (Standalone Components) + RxJS + Clean Architecture.
* **Base de Datos:** Microsoft SQL Server.
* **Seguridad:** JWT (JSON Web Tokens).
* **Documentación:** Swagger / OpenAPI 3.0.
* **Patrones de Diseño:** Repository, Unit of Work, Outbox Pattern (para Webhooks).
## 📂 Estructura del Proyecto
* `/Back`: Código fuente del backend (API REST).
* `/Front`: Código fuente del frontend (Angular).
* `/Back/prisma`: Esquema de base de datos y migraciones.
## ⚙️ Requisitos Previos
* Node.js v22+
* SQL Server (Local o Docker)
* Angular CLI (para el frontend)
## 🚀 Instalación y Ejecución Local
### Backend
1. Navega a la carpeta `Back`:
 ```bash
 cd Back

2.  Instala las dependencias:
    
    bash
    
    npm install
    
3.  Configura las variables de entorno (copia el archivo `.env.example` a `.env` y ajusta tus credenciales de SQL Server).
    
4.  Genera el cliente de Prisma y sincroniza la base de datos:
    
    bash
    
    npx prisma generate --schema=packages/infrastructure/prisma/schema.prisma
    npx prisma db push --schema=packages/infrastructure/prisma/schema.prisma
    
5.  Inicia el servidor:
    
    bash
    
    npm run dev
    
    _La API estará disponible en `http://localhost:3000` y Swagger en `http://localhost:3000/api-docs`._
    

### Frontend

1.  Navega a la carpeta `Front/CreditoAsociado`:
    
    bash
    
    cd Front/CreditoAsociado
    
2.  Instala las dependencias:
    
    bash
    
    npm install
    
3.  Inicia el servidor de desarrollo:
    
    bash
    
    ng serve
    
    _La aplicación web estará disponible en `http://localhost:4200`._
    

## 🔐 Credenciales de Prueba (Swagger y Frontend)

-   **Usuario:**  `admin`
    
-   **Contraseña:**  `admin123`
    

## 🐳 Ejecución con Docker (Opcional)

Si tienes Docker instalado, puedes levantar el Backend y SQL Server con un solo comando:

bash

cd Back
docker compose up --build

_(Nota: La primera vez debes ejecutar `docker exec -it backend_credito npx prisma db push` para crear las tablas)._

## 🧪 Pruebas Automatizadas

Para ejecutar las pruebas unitarias del backend (Jest):

bash

cd Back
npx jest --config jest.config.cjs

## 📊 Decisiones Técnicas y Arquitectura

Las justificaciones detalladas sobre las reglas de negocio, el patrón Outbox para webhooks, la seguridad JWT y las estrategias de escalabilidad se encuentran documentadas en el archivo [DECISIONES_TECNICAS.md](https://./DECISIONES_TECNICAS.md).

## 🗺️ Diagrama de Arquitectura

```mermaid
graph TD
    Client[Angular Frontend] -->|HTTP REST + JWT| API[Express API]
    API -->|Middleware| Auth[Auth JWT]
    Auth --> Controller[Controladores]
    Controller --> UseCases[Casos de Uso]
    UseCases --> Domain[Entidades y Puertos]
    UseCases --> Repo[Repositorios]
    Repo --> DB[(SQL Server)]
    UseCases --> Outbox[Webhook Outbox]
    Outbox --> Worker[Worker Background]
    Worker -->|HTTP POST| External[Sistema Externo]