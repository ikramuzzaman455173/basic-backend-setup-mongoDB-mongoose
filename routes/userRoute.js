import express from "express";
import { fetch, create, update, deleteUser } from "../controller/userController.js";


const router = express.Router();

// Route to get all users
router.get("/users", fetch);

// Route to create a new user
router.post("/users", create);

// Route to update an existing user by ID
router.put("/users/:id", update);

// Route to delete a user by ID
router.delete("/users/:id", deleteUser);

export default router;

