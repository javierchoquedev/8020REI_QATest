import { expect, Locator, Page } from "playwright/test";
import { Actions } from "../utils/Actions";

export class NewView_Page {
    private readonly page: Page;
    private readonly actions: Actions;
    private readonly only_nonfooter_element: string = "div.bg-slate-800";
    private readonly home_button_locator: string = "//a[normalize-space()='Home']";
    
    constructor(page: Page){
        this.page = page;
        this.actions = new Actions(page);

    }

    async Click_Home (){
        await this.actions.Click_Element(this.page, this.home_button_locator);
    }

    Return_NonFooter_Locator (): Locator{
        return this.page.locator(this.only_nonfooter_element);
    }

}