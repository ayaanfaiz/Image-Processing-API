import request from "supertest";
import app from "../src/app";

describe("Image Get Endpoint", () => {
  it("should create a new get request", async () => {
    const res = await request(app).get("/image");
    expect(res.status).toEqual(200);
  });
});
