import { config } from "dotenv";
import z from "zod";

config();

const envSchema = z.object({
  SERVER_IP: z.string().optional(),
});

type Config = z.infer<typeof envSchema>;

const defaultConfig: Config = {};

const parsedEnv = envSchema.partial().parse(process.env);

export default Object.assign({} as Config, defaultConfig, parsedEnv);
