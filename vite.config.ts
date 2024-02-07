import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const isTesting = process.env.ENV === "testing";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isTesting ? "/dragables/" : "/",
});
