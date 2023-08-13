import { setupWorker, rest } from "msw";
import { LoginResponse } from "./interface";

const loginHandler = rest.get<LoginResponse>(
  "/login",
  async (req, res, ctx) => {
    return res(
      ctx.json({
        username: "Doe",
        firstName: "John",
      })
    );
  }
);

export const worker = setupWorker(loginHandler);
