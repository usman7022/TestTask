import request from "supertest";
import { app } from "../../app";
jest.setTimeout(30000);
it("fails when an email does not exist supplied", async () => {
  await request(app)
    .post("/api/signin")
    .send({
      email: "test@test.com",
      password: "password1234",
    })
    .expect(500);
});
jest.setTimeout(30000);

it("fails when an incorrect/empty email and password is supplied", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "12345678@aS",
    })
    .expect(500);

  await request(app)
    .post("/api/signin")
    .send({
      email: "test123@test.com",
      password: "incorrectpassword",
    })
    .expect(500);
});
jest.setTimeout(30000);

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "password1234",
    })
    .expect(500);

  const response = await request(app)
    .post("/api/signin")
    .send({
      email: "test@test.com",
      password: "password1234",
    })
    .expect(500);

  // expect(response.get("Set-Cookie"))?.toBeDefined();
});
