import { Page } from "@playwright/test";

export const takeScreenshot = async (page: Page, folder: string, name: string) => {
    await page.screenshot({ path: `screenshots/${folder}/${name}.png` });
}