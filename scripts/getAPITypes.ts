import config from "@/config";
import { exec } from "child_process";
import { writeFileSync } from "fs";
import path from "path";

if (!process.env.SERVER_IP) {
  console.error("No server ip set. Set environment variable SERVER_IP");
  process.exit(1);
}

const data = await (
  await fetch("http://" + config.SERVER_IP + "/docs/openapi/raw")
).text();

writeFileSync(path.join(process.cwd() + "/api.yaml"), data);

exec(
  `cd ${path.join(process.cwd())} && bunx openapi-typescript api.yaml -o ./src/types/openapi.d.ts`,
);
exec("rm api.yaml");
