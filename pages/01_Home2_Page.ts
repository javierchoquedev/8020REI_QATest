import { expect, Locator, Page } from "playwright/test";
import { Actions } from "../utils/Actions";

export class Home2_Page{
    private readonly actions: Actions;
    private readonly page: Page;
    private readonly general_name_labels_locator: string = "span.text-white";
    private readonly general_images_locator: string ="span.bg-gradient-to-b";
    private readonly general_verdetalle_href_locator: string = "a.bg-gradient-to-r";
    private readonly character1_link_locator: string = "a[href='/character/1']";
    private readonly lastcharacter_label_locator: string = "//span[normalize-space()='Ants in my Eyes Johnson']";
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
    
    async Click_VerDetalle (){
        await this.actions.Click_Element(this.page, this.character1_link_locator);
    }

    Return_Character_Names (): Locator{
        return this.page.locator(this.general_name_labels_locator);
    }
    Return_Character_Images (): Locator{
        return this.page.locator(this.general_images_locator);
    }
    Return_Character_Links (): Locator {
        return this.page.locator(`${this.general_verdetalle_href_locator}:has-text("Ver detalle")`);
    }
    
    Return_LastCharacterInview (): Locator{
        return this.page.locator(this.lastcharacter_label_locator);
    }

    Return_FirstCharacter (): Locator{
        return this.page.locator(this.character1_link_locator);
    }
}