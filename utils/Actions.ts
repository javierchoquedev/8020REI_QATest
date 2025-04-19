import { expect, Locator, Page } from "playwright/test";

export class Actions {
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async Click_Element(page: Page, button_locator: string) {
        await page.locator(button_locator).click();
    }      

    async Fill_Input(page: Page, textbox_locator: string, text_value: string) {
        await page.locator(textbox_locator).fill(text_value);
    }

    async Get_InnerText (page: Page, label_locator: string): Promise <string>{
        return await page.locator(label_locator).innerText();
    }
}