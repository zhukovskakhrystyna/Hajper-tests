import BasePage from "./base.page";
class MainPage extends BasePage {
  pageVerificationElement() {
    return cy.get('[class="home__Wrapper-sc-sblvy5-0 hqVhqy"]');
  }

  sjalvtestButton() {
    return cy.get(
      '[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconTest-sc-pgu2pb-4 jiRjhg bnmYsr"]'
    );
  }

  spelgranserButton() {
    return cy.get(
      '[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconLimits-sc-pgu2pb-3 jiRjhg bfqRVK"]'
    );
  }

  spelpausButton() {
    return cy.get(
      '[class="regulations-header-sga__RegulationsIcon-sc-pgu2pb-1 regulations-header-sga__RegulationsIconPause-sc-pgu2pb-2 jiRjhg kWgcdl"]'
    );
  }

  logoImage() {
    return cy.get('[data-at="spelinspektionen-logo"]');
  }

  casinoButton() {
    return cy.get('[data-at="product-casino"]');
  }

  footerObject() {
    return cy.get(
      "ul.footer-list__FooterFlexList-sc-166wcze-0.footer-payment-list__StyledFooterLogos-sc-1vytd3p-0.biBByz.VssKe.flex-list-footer.payment-logos-footer"
    );
  }
}

export default MainPage;
