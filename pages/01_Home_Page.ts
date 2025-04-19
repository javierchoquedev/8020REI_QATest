import { expect, Locator, Page } from "playwright/test";
import { Actions } from "../utils/Actions";

export class Home_Page{
    private readonly actions: Actions;
    private readonly page: Page;
    private readonly runthisproject_button_locator: string = "button[onclick='__runProject()'] span"

    constructor(page: Page){
        this.page = page;
        this.actions = new Actions(page);
    }

    async Click_RunThisProject (){
        await this.actions.Click_Element(this.page, this.runthisproject_button_locator);
    }

    async Click_VerDetalle (){
        await this.actions.Click_Element(this.page, this.runthisproject_button_locator);
    }

}