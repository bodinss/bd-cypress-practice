describe("Register Page Pop-Up Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("opens and closes the user agreement popup correctly.", () => {
    cy.get('[data-cy="user-agreement"]').click();
    cy.get('[data-cy="user-agreement-popup"]').should("be.visible");
    cy.get('[data-cy="close-button"]').click();
    cy.get('[data-cy="page-title"]').should("have.text", "REGISTER");
  });
  it("opens and closes the privacy policy popup correctly.", () => {
    cy.get('[data-cy="privacy-policy"]').click();
    cy.get('[data-cy="privacy-policy-popup"]').should("be.visible");
    cy.get('[data-cy="close-button"]').click();
    cy.get('[data-cy="page-title"]').should("have.text", "REGISTER");
  });
});

describe("Validates Registration with empty data", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("shows the error messages correctly when leaving ALL REGISTRATION INPUTS EMPTY", () => {
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="empty-register-email-error"]').should("exist");
    cy.get('[data-cy="empty-register-password-error"]').should("exist");
    cy.get('[data-cy="empty-register-date-of-birth-error"]').should("exist");
    cy.get('[data-cy="empty-register-phone-number-error"]').should("exist");
  });
  it("shows the error messages correctly when leaving ONLY EMAIL INPUT EMPTY", () => {
    cy.fixture("users/all.json").then((userData) => {
      const formattedDate = userData[0].dateOfBirth
        .split("/")
        .reverse()
        .join("-");
      cy.get('[data-cy="register-password-input"]').type(userData[0].password);
      cy.get('[data-cy="register-date-of-birth-input"]').type(formattedDate);
      cy.get('[data-cy="register-phone-number-input"]').type(
        userData[0].phoneNumber
      );
      cy.get('[data-cy="register-agreement-checkbox').click();
      cy.get('[data-cy="register-button').click();
      cy.get('[data-cy="empty-register-email-error"]').should("exist");
    });
  });
  it("shows the error messages correctly when leaving ONLY PASSWORD INPUT EMPTY", () => {
    cy.fixture("users/all.json").then((userData) => {
      const formattedDate = userData[0].dateOfBirth
        .split("/")
        .reverse()
        .join("-");
      cy.get('[data-cy="register-email-input"]').type(userData[0].email);
      cy.get('[data-cy="register-date-of-birth-input"]').type(formattedDate);
      cy.get('[data-cy="register-phone-number-input"]').type(
        userData[0].phoneNumber
      );
      cy.get('[data-cy="register-agreement-checkbox').click();
      cy.get('[data-cy="register-button').click();
      cy.get('[data-cy="empty-register-password-error"]').should("exist");
    });
  });
  it("shows the error messages correctly when leaving ONLY DATE OF BIRTH INPUT EMPTY", () => {
    cy.fixture("users/all.json").then((userData) => {
      cy.get('[data-cy="register-email-input"]').type(userData[0].email);
      cy.get('[data-cy="register-password-input"]').type(userData[0].password);
      cy.get('[data-cy="register-phone-number-input"]').type(
        userData[0].phoneNumber
      );
      cy.get('[data-cy="register-agreement-checkbox').click();
      cy.get('[data-cy="register-button').click();
      cy.get('[data-cy="empty-register-date-of-birth-error"]').should("exist");
    });
  });
  it("shows the error messages correctly when leaving ONLY PHONE NUMBER INPUT EMPTY", () => {
    cy.fixture("users/all.json").then((userData) => {
      const formattedDate = userData[0].dateOfBirth
        .split("/")
        .reverse()
        .join("-");
      cy.get('[data-cy="register-email-input"]').type(userData[0].email);
      cy.get('[data-cy="register-password-input"]').type(userData[0].password);
      cy.get('[data-cy="register-date-of-birth-input"]').type(formattedDate);
      cy.get('[data-cy="register-agreement-checkbox').click();
      cy.get('[data-cy="register-button').click();
      cy.get('[data-cy="empty-register-phone-number-error"]').should("exist");
    });
  });
});

describe("Validates Check box with Registration", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("can register successfully with valid input all data and CHECKBOX TICKED", () => {
    cy.fixture("users/all.json").then((userData) => {
      const formattedDate = userData[0].dateOfBirth
        .split("/")
        .reverse()
        .join("-");
      cy.get('[data-cy="register-email-input"]').type(userData[0].email);
      cy.get('[data-cy="register-password-input"]').type(userData[0].password);
      cy.get('[data-cy="register-date-of-birth-input"]').type(formattedDate);
      cy.get('[data-cy="register-phone-number-input"]').type(
        userData[0].phoneNumber
      );
      cy.get('[data-cy="register-agreement-checkbox"]').click();
      cy.get('[data-cy="register-button"]').click();
      cy.on("window:alert", (str) => {
        expect(str).to.eq(`Successfully Registered`);
      });
    });
  });
  it("can't register successfully with input all data and WITHOUT CHECKBOX TICKED", () => {
    cy.fixture("users/all.json").then((userData) => {
      const formattedDate = userData[0].dateOfBirth
        .split("/")
        .reverse()
        .join("-");
      cy.get('[data-cy="register-email-input"]').type(userData[0].email);
      cy.get('[data-cy="register-password-input"]').type(userData[0].password);
      cy.get('[data-cy="register-date-of-birth-input"]').type(formattedDate);
      cy.get('[data-cy="register-phone-number-input"]').type(
        userData[0].phoneNumber
      );

      cy.get('[data-cy="register-button"]').click();
      cy.on("window:alert", (str) => {
        expect(str).to.eq(
          `In order to register, You must agree to the User Agreement and Privacy Policy`
        );
      });
    });
  });
});

describe("Validates EMAIL INPUT", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("Validates the invalid email format.", () => {
    cy.fixture("users/invalidUserInfo.json").then((userData) => {
      for (const user of userData) {
        cy.get('[data-cy="register-email-input"]').clear().type(user.email);
        cy.get('[data-cy="register-button"]').click();
        cy.get('[data-cy="format-register-email-error"]').should("exist");
      }
    });
  });
  it("Validates the invalid email length.", () => {
    cy.fixture("users/longEmail.json").then((userData) => {
      cy.get('[data-cy="register-email-input"]')
        .clear()
        .type(userData[0].email);
      cy.get('[data-cy="register-button"]').click();
      cy.get('[data-cy="length-register-email-error"]').should("exist");
    });
  });
});

describe("Validates PASSWORD INPUT", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("Validates the invalid password format.", () => {
    cy.fixture("users/invalidUserInfo.json").then((userData) => {
      for (const user of userData) {
        cy.get('[data-cy="register-password-input"]')
          .clear()
          .type(user.password);
        cy.get('[data-cy="register-button"]').click();
        cy.get('[data-cy="format-register-password-error"]').should("exist");
      }
    });
  });
  it("Validates the invalid password length.", () => {
    cy.get('[data-cy="register-password-input"]').clear().type("abc123");
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="length-register-password-error"]').should("exist");
    cy.get('[data-cy="register-password-input"]').clear().type("a          ");
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="length-register-password-error"]').should("exist");
    cy.get('[data-cy="register-password-input"]')
      .clear()
      .type("abc123456789$*@(!)#*@(!@");
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="length-register-password-error"]').should("exist");
  });
});

describe("Validates DATE OF BIRTH INPUT", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("Validates the invalid date of birth format.", () => {
    cy.fixture("users/invalidUserInfo.json").then((userData) => {
      for (const user of userData) {
        const formattedDate = user.dateOfBirth.split("/").reverse().join("-");
        cy.get('[data-cy="register-date-of-birth-input"]')
          .clear()
          .type(formattedDate);
        cy.get('[data-cy="register-button"]').click();
        cy.get('[data-cy="format-register-date-of-birth-error"]').should(
          "exist"
        );
      }
    });
  });
  it("Validates the age of user that is under 18", () => {
    cy.fixture("users/under18User.json").then((userData) => {
      for (const user of userData) {
        const formattedDate = user.dateOfBirth.split("/").reverse().join("-");
        cy.get('[data-cy="register-date-of-birth-input"]')
          .clear()
          .type(formattedDate);
        cy.get('[data-cy="register-button"]').click();
        cy.get('[data-cy="age-register-date-of-birth-error"]').should("exist");
      }
    });
  });
});

describe("Validates PHONE NUMBER INPUT", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="register-button"]').click();
    cy.url().should("include", "/register");
  });
  it("Validates the invalid phone number format.", () => {
    cy.fixture("users/invalidUserInfo.json").then((userData) => {
      for (const user of userData) {
        cy.get('[data-cy="register-phone-number-input"]')
          .clear()
          .type(user.phoneNumber);
        cy.get('[data-cy="register-button"]').click();
        cy.get('[data-cy="format-register-phone-number-error"]').should(
          "exist"
        );
      }
    });
  });
  it("Validates the invalid phone number length.", () => {
    cy.get('[data-cy="register-phone-number-input"]').clear().type("089785909");
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="length-register-phone-number-error"]').should("exist");
    cy.get('[data-cy="register-phone-number-input"]')
      .clear()
      .type("08978590911");
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="length-register-phone-number-error"]').should("exist");
    cy.get('[data-cy="register-phone-number-input"]').clear().type("056785");
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="length-register-phone-number-error"]').should("exist");
  });
});
