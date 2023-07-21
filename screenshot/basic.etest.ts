import { test, expect } from "@playwright/test";
import {takeScreenshot} from "./utils";

const folder = "basic";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("initial", async ({ page }) => {
    expect(await page.innerText("h1")).toBe("Introduction to Mathematical Models of the Epidemiology & Control of Infectious Diseases - 2023");
    await takeScreenshot(page, folder, "test");
});