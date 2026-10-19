import express from "express";
import cors from "cors";
import { mainRouter } from "./routes/routes.server.js";
import { swaggerSpec } from "./lib/swagger.js";
import swaggerUi from "swagger-ui-express";
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { iniciarWebhookWorker } from "./workers/webhook.worker.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(mainRouter);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    
    iniciarWebhookWorker(); 
});