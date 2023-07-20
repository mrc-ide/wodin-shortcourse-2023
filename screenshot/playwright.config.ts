import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: "*.etest.ts",
    fullyParallel: true,
    use: {
        baseURL: "http://localhost:3000",
        actionTimeout: 0
    }
};

export default config;