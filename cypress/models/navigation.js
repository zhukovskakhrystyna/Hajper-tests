import MainPage from "../page-objects/main.page.js";

const mainPage = new MainPage();

export function navigateToCasino() {
  return mainPage.casinoButton().click();
}
