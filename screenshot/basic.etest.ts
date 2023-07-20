import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("initial", async ({ page }) => {
    expect(await page.innerText("h1")).toBe("Introduction to Mathematical Models of the Epidemiology & Control of Infectious Diseases - 2023");
});