import { test } from "bun:test";
import { login } from ".";
test("", async () => {
  const response = await login({
    email: "test@api.com",
    password: "$2a$12$WYCFEKA.qiUVwO8BAIop2eEeJK.wgUyTE.Z2kL8.D80vKKfKF3KDi",
  });
  console.log(response);
});
