import BasePage from "./base.page";
class CasinoPage extends BasePage {
  headerPopup() {
    return cy.get('[class="btn btn--ghost"]');
  }

  gamesCards() {
    return cy.get('[class="game-card__detail u-b-radius-bottom"]');
  }

  favoriteButton() {
    return cy.get('[class="game-info__love-button "]');
  }

  popupInput() {
    return cy.get(
      '[class="notifications__NotificationWrapper-sc-b8lbq-0 labehh no-transition notification-wrap notification-wrap--open neutral"]'
    );
  }
}

export default CasinoPage;
