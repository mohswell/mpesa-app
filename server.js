import express from "express";
import cors from "cors";
import 'dotenv/config'

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
import lipaNaMpesaRoutes from "./routes/routes.lipanampesa.js";
app.use('/api', lipaNaMpesaRoutes);

// Port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
