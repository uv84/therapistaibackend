"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load environment variables FIRST
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_2 = require("inngest/express");
const errorHandler_1 = require("./middleware/errorHandler");
const logger_1 = require("./utils/logger");
const auth_1 = __importDefault(require("./routes/auth"));
const chat_1 = __importDefault(require("./routes/chat"));
const mood_1 = __importDefault(require("./routes/mood"));
const activity_1 = __importDefault(require("./routes/activity"));
const db_1 = require("./utils/db");
const client_1 = require("./inngest/client");
const functions_1 = require("./inngest/functions");
// Create Express app
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)()); // Security headers
app.use((0, cors_1.default)()); // Enable CORS
app.use(express_1.default.json()); // Parse JSON bodies
app.use((0, morgan_1.default)("dev")); // HTTP request logger
// Set up Inngest endpoint
app.use("/api/inngest", (0, express_2.serve)({ client: client_1.inngest, functions: functions_1.functions }));
// OnaF6EGHhgYY9OPv
// Routes
app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
});
app.use("/auth", auth_1.default);
app.use("/chat", chat_1.default);
app.use("/api/mood", mood_1.default);
app.use("/api/activity", activity_1.default);
// Error handling middleware
app.use(errorHandler_1.errorHandler);
// Start server
const startServer = async () => {
    try {
        // Connect to MongoDB first
        await (0, db_1.connectDB)();
        // Then start the server
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            logger_1.logger.info(`Server is running on port ${PORT}`);
            logger_1.logger.info(`Inngest endpoint available at http://localhost:${PORT}/api/inngest`);
        });
    }
    catch (error) {
        logger_1.logger.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
