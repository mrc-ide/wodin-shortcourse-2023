import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: "*.etest.ts",
    fullyParallel: true,
    use: {
        baseURL: "http://localhost:3000",
        actionTimeout: 0,
        viewport: { width: 1920, height: 1080 }
    }
};

export default config;