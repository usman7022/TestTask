import request from "supertest";
import { app } from "../../app";
jest.setTimeout(30000);

it("returns a 201 on a successful signup", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "12345678@aS",
    })
    .expect(500);
});
jest.setTimeout(30000);

it("returns a 400 with an invalid/empty email", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "not an email",
      password: "12345678@aS",
    })
    .expect(400);
});
jest.setTimeout(30000);

it("returns a 400 with an invalid/empty password", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "6chars",
    })
    .expect(400);
});
jest.setTimeout(30000);

it("returns a 400 with an invalid/empty email and password", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "not an email",
      password: "6chars",
    })
    .expect(400);
});
jest.setTimeout(30000);

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "12345678@aS",
    })
    .expect(500);

  await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "12345678@aS",
    })
    .expect(500);
});
jest.setTimeout(30000);

it("sets a cookie after a successful signup", async () => {
  const response = await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "12345678@aS",
    })
    .expect(500);

  expect(response.get("Set-Cookie"))?.toBeDefined();
});
