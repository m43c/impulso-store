import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

import request from "supertest";

import app from "../../app.js";

let mongoServer;
let mongoUri;

// Connect to in-mem database
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
});

// Disconnect and stop MongoDB instance after tests
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /signup", () => {
  // Sample user data
  const userPayload = {
    username: "User",
    email: "user@gmail.com",
    password: "password",
  };

  test("should successfully register a new user", async () => {
    // Send a POST request to the /api/signup endpoint with the user payload
    const response = await request(app).post("/api/signup").send(userPayload);

    // Expect the HTTP status code of the response to be 200 (OK)
    expect(response.status).toBe(200);
  });

  test("should return an error if the gmail is already in use", async () => {
    // Attempt to register a user with the same email as in the userPayload
    const response = await request(app).post("/api/signup").send(userPayload);

    // Expect the HTTP status code of the response to be 400 (Bad Request)
    expect(response.status).toBe(400);
  });
});
