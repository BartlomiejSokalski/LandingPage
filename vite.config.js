import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const exercisePath = "C:\\Users\\mariusz\\Desktop\\programowanie\\niegotoweprojekty\\car-sharing";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
});
