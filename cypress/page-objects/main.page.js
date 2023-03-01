import BasePage from "./base.page";
class MainPage extends BasePage {
  pageVerificationElement() {
    return cy.get('[class="home__Wrapper-sc-sblvy5-0 fUiNem"]');
  }

  sjalvtestButton() {
    return cy.get(
      '[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconTest-sc-pgu2pb-4 dtjrIo fPZTpv"]'
    );
  }

  spelgranserButton() {
    return cy.get(
      '[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconLimits-sc-pgu2pb-3 dtjrIo bcppqy"]'
    );
  }

  spelpausButton() {
    return cy.get(
      '[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconPause-sc-pgu2pb-2 dtjrIo fCgkJZ"]'
    );
  }

  logoImage() {
    return cy.get('[class="licenses-logos__spelinspektionen u-dib"]');
  }

  casinoButton() {
    return cy.get('[data-at="product-casino"]');
  }

  footerObject() {
    return cy.get(
      '[class="footer-list__FooterFlexList-sc-166wcze-0 footer-payment-list__StyledFooterLogos-sc-1vytd3p-0 rea-dv hLLFKd flex-list-footer payment-logos-footer"]'
    );
  }
}

export default MainPage;
