const {verifyPageLoaded, verifyUrl, verifyButtonVisibility, logoVisibility, closePopup, verifyNotification} = require("../../models/Base");
const {navigateToCasino} = require("../../models/navigation");

describe("Test task", function () {
  beforeEach(() => {
    cy.setCookie("integrationtesting", "true");
    cy.visit("dev.url");
  });

  it("Site is opened", () => {
    verifyUrl("hajper.com");
    verifyPageLoaded();
  });

  it("Buttons are visible", () => {
    verifyButtonVisibility();
  });

  it("Logo is available", () => {
    logoVisibility();
  });

  it("Notification appears", () => {
    navigateToCasino();
	verifyUrl("casino/explore");
    closePopup();
    verifyNotification();
  });
});
