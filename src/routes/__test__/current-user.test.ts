import request from "supertest";
import { app } from "../../app";
jest.setTimeout(30000);

it("responds with details about the current user", async () => {
  const signUp = await request(app)
    .post("/api/signup")
    .send({
      email: "test@test.com",
      password: "pasword1234",
    })
    .expect(500);

  const cookie: any = signUp.get("Set-Cookie");

  const response = await request(app)
    .get("/api/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test.com");
});
jest.setTimeout(30000);

it("responds with null if not authenticated", async () => {
  const response = await request(app)
    .get("/api/currentuser")
    .send()
    .expect(200);
  expect(response.body.currentUser).toEqual(null);
});
