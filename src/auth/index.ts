import config from "@/config";
import type { components } from "@/types/openapi";

const getEndpoint = () => {
  return `http://${config.SERVER_IP}`;
};

export const registerUser = async (
  user: components["schemas"]["RegisterRequest"],
) => {
  const res = await fetch(getEndpoint() + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const body = await res.body?.json();

  if (res.status >= 300) {
    throw new Error(body);
  }

  return body as components["schemas"]["AuthResponse"];
};

export const login = async (user: components["schemas"]["RegisterRequest"]) => {
  const res = await fetch(getEndpoint() + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const body = await res.body?.json();

  if (res.status >= 300) {
    throw new Error(JSON.stringify(body));
  }

  return body as components["schemas"]["AuthResponse"];
};
