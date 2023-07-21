import { test, expect } from "@playwright/test";
import {takeScreenshot} from "./utils";

const folder = "basic";

test.beforeEach(async ({ page }) => {
    await page.goto("/apps/vaccination");
});

test("Code and Run tabs", async ({ page }) => {
    await expect(page.locator(":nth-match(.plot .main-svg, 1)")).toBeVisible(); // wait for the plot to render
    await takeScreenshot(page, folder, "CodeRun");
});

test("Options and Run tabs", async ({ page }) => {
    await page.click(":nth-match(.wodin-left .nav-link, 2)");
    await takeScreenshot(page, folder, "OptionsRun");
});

test("Options and Sensitivity tabs", async ({ page }) => {
    await page.click(":nth-match(.wodin-left .nav-link, 2)");
    await page.click(":nth-match(.wodin-right .nav-link, 2)");
    await takeScreenshot(page, folder, "OptionsSensitivity");
});