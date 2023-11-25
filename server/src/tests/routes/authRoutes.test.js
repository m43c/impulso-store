import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import app from "../../app.js";

let mongoServer;
let mongoUri;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /signup", () => {
  const userPayload = {
    username: "User",
    email: "user@gmail.com",
    password: "password",
  };

  test("should successfully register a new user", async () => {
    const response = await request(app).post("/api/signup").send(userPayload);
    expect(response.status).toBe(200);
  });

  test("should return an error if the gmail is already in use", async () => {
    const response = await request(app).post("/api/signup").send(userPayload);
    expect(response.status).toBe(400);
  });
});
