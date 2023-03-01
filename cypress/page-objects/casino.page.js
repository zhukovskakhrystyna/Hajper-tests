import BasePage from "./base.page";
class CasinoPage extends BasePage {
  headerPopup() {
    return cy.get('[class="header__Nav-sc-10cv0jm-0 dFRwVb"]');
  }

  gamesCards() {
    return cy.get('[class="game-card-styles__CardInterface-sc-1opub9e-1 iwreug"]');
  }

  infoButton() {
    return cy.get('[class="info-button__InfoButtonContainer-sc-ubfp7e-0 OyThS"]');
  }

  popupInput() {
    return cy.get(
      '[class="game-infostyles__GameInfoContainer-sc-dnrnxp-0 dfeOsW"]'
    );
  }
}

export default CasinoPage;
