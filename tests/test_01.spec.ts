import { test, expect } from '@playwright/test';
import { Home_Page } from '../pages/01_Home_Page';
import { Home2_Page } from '../pages/01_Home2_Page';
import { Character_Page } from '../pages/02_Character_page';
import { NewView_Page } from '../pages/03_NewView_Page';

test('Test_01', async ({ page }) => {
//Please note that some assertions have a Console.log afterwards. This was made to double check it's results and make them visible.

// #region 0. Navigation to Home Page.
    await page.goto("https://vue-aknxx1.stackblitz.io/");
    const HomePage = new Home_Page(page)
    await HomePage.Click_RunThisProject();

    const Home2Page = new Home2_Page(page);
// #endregion

// #region 1. In the home page, the cards must have the name, the image and a link that says “Ver detalle"-
    await expect(Home2Page.Return_Character_Names()).toHaveCount(20);
    await expect(Home2Page.Return_Character_Images()).toHaveCount(20);
    await expect(Home2Page.Return_Character_Links()).toHaveCount(20);
    console.log("Character Names count: ", await Home2Page.Return_Character_Names().count());
    console.log("Character Images count: ", await Home2Page.Return_Character_Images().count());
    console.log("Character Links count: ", await Home2Page.Return_Character_Links().count());
//#endregion

// #region 2. The “Ver detalle” button navigates to the character view: character/1.
    await Home2Page.Click_VerDetalle();
// #endregion

// #region 3. The character view must have the name, genre, specie and status.
    const CharacterPage = new Character_Page (page);
    await expect(CharacterPage.Return_Locator_Name()).toBeVisible();
    await expect(CharacterPage.Return_Locator_Gender()).toBeVisible();
    await expect(CharacterPage.Return_Locator_Specie()).toBeVisible();
    await expect(CharacterPage.Return_Locator_Status()).toBeVisible();
    console.log("Name visibility: ", await CharacterPage.Return_Locator_Name().isVisible());
    console.log("Gender visibility: ", await CharacterPage.Return_Locator_Gender().isVisible());
    console.log("Specie visibility: ", await CharacterPage.Return_Locator_Specie().isVisible());
    console.log("Status visibility: ", await CharacterPage.Return_Locator_Status().isVisible());
// #endregion

// #region 4. The home button in the bottom bar navigates to the root of the web application.
    await CharacterPage.Click_Home();
    await expect(page).toHaveURL("https://vue-aknxx1.stackblitz.io/");
// #endregion

// #region 5. The new view, which is navigated with the “add” button, must have a form.
    /*Given that 'https://vue-aknxx1.stackblitz.io/new' is empty (has no elements apart from the footer), 
    the following lines only verify that there, in fact, exists a DIV element.  */

    await CharacterPage.Click_Add();
    const NewviewPage = new NewView_Page (page);
    await expect(NewviewPage.Return_NonFooter_Locator()).toHaveCount(1);
    console.log("Return non footer locator existance: ", await NewviewPage.Return_NonFooter_Locator().count());

    await NewviewPage.Click_Home();
// #endregion

// #region 6. The “top” button scrolls to the top of the home page.
    await Home2Page.Return_LastCharacterInview().scrollIntoViewIfNeeded(); //Scrolling to the bottom of the page.
    await expect(Home2Page.Return_FirstCharacter()).not.toBeInViewport(); //Verifying that 1st Character is not in the users viewport.
    await Home2Page.Click_Top(); //Scroll to the top of the page.
    await page.waitForTimeout(3000); //Wait until scroll animation finishes.
    await expect(Home2Page.Return_FirstCharacter()).toBeInViewport(); //Verifying that 1st Character IS NOW in the users viewport.
// #endregion

});

