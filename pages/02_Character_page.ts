import { Locator, Page } from "playwright/test"
import { Actions } from "../utils/Actions";

export class Character_Page {
    private readonly page: Page;
    private readonly actions: Actions;
    private readonly character_name_label_locator: string = "//h1[normalize-space()='Rick Sanchez']";
    private readonly character_gender_label_locator: string = "(//p[@class='text-gray-200'])[1]";
    private readonly character_specie_label_locator: string = "(//p[@class='text-gray-200'])[2]";
    private readonly character_status_label_locator: string = "(//p[@class='text-gray-200'])[3]";
    private readonly home_button_locator: string = "//a[normalize-space()='Home']";
    private readonly add_button_locator: string = "//a[normalize-space()='Add']";
    private readonly top_button_locator: string = "//button[normalize-space()='Top']";

    constructor(page: Page){
        this.page = page;
        this.actions = new Actions(page);
    }
    
    async Click_Home (){
        await this.actions.Click_Element(this.page, this.home_button_locator);
    }
    async Click_Add (){
        await this.actions.Click_Element(this.page, this.add_button_locator);
    }
    async Click_Top (){
        await this.actions.Click_Element(this.page, this.top_button_locator);
    }

    Return_Locator_Name (): Locator{
        return this.page.locator(this.character_name_label_locator);
    }
    Return_Locator_Gender (): Locator{
        return this.page.locator(this.character_gender_label_locator);
    }
    Return_Locator_Specie (): Locator{
        return this.page.locator(this.character_specie_label_locator);
    }
    Return_Locator_Status (): Locator{
        return this.page.locator(this.character_status_label_locator);
    }

}