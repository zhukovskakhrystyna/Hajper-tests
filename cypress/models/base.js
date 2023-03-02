import MainPage from "../page-objects/main.page.js";
import CasinoPage from "../page-objects/casino.page.js";

const mainPage = new MainPage();
const casinoPage = new CasinoPage();

export function verifyPageLoaded() {
  verifyVisibility(mainPage.pageVerificationElement());
}

export function verifyButtonVisibility() {
  verifyVisibility(mainPage.sjalvtestButton());
  verifyVisibility(mainPage.spelgranserButton());
  verifyVisibility(mainPage.spelpausButton());
}

export function logoVisibility() {
  mainPage.footerObject().scrollIntoView();
  verifyVisibility(mainPage.logoImage());
}

function verifyVisibility(el) {
  return el.should("be.visible");
}

function verifyExistence(el) {
  return el.should("exist");
}

export function verifyUrl(url) {
  return cy.url().should("include", url);
}

export function closePopup() {
  return casinoPage.headerPopup().click();
}

export function verifyNotification() {
  casinoPage.gamesCards().first().click();
  casinoPage.infoButton().first().click();
  verifyExistence(casinoPage.popupInput());
}
