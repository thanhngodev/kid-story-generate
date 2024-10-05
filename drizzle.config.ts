import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:P23RsJVojqIK@ep-tiny-hat-a58u5dmy.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require",
  },
  verbose: true,
  strict: true,
});
