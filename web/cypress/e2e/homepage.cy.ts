export {};

describe("Homepage", () => {
  it("should render app view correctly", () => {
    cy.login();

    cy.get(".hidden > :nth-child(1) > .btn").click();
    cy.contains("h2", "Habit").should("exist");

    cy.get(".hidden > :nth-child(2) > .btn").click();
    cy.contains("h2", "Accomplishments").should("exist");
  });

  it("should open the user options menu", () => {
    cy.get('[alt="random avatar image"]').click();

    cy.get(":nth-child(1) > a").should("be.visible");
    cy.get(":nth-child(2) > a").should("be.visible");
    cy.get(":nth-child(3) > a").should("be.visible");
  });

  describe("Habit Checklist", () => {
    it("should be able to add new habit", () => {
      cy.get(".hidden > :nth-child(1) > .btn").click();
      cy.get(".input").type("New Habit");

      cy.get(".mb-8 > .btn").click();

      cy.contains("New Habit").should("exist");
    });

    it("should be able to toggle habit", () => {
      cy.contains("New Habit").click();
      cy.get(".text-success").should("exist");
      cy.get(".text-error").should("not.exist");

      cy.contains("New Habit").click();
      cy.get(".text-success").should("not.exist");
      cy.get(".text-error").should("exist");
    });
  });

  describe("Accomplishments", () => {
    it("should be able to add new accomplishment", () => {
      cy.get(".hidden > :nth-child(2) > .btn").click();

      cy.intercept("POST", "http://localhost:3333/rewards", (req) => {
        const body = req.body;
        expect(body.title).to.equal("New Accomplishment");
        expect(body.body).to.equal("New Accomplishment Description");
        expect(body.valid).to.equal(false);

        return {
          status: 201,
          body: {},
        };
      }).as("postReward");

      cy.get("input.input").type("New Accomplishment");
      cy.get(".h-32").type("New Accomplishment Description");
      cy.get(".label-text").click();

      cy.get(".form-control > .btn").click();

      cy.contains(/accomplishment sent successfully/i).should("exist");
    });

    it("should return to Accomplishments dashboard when 'Go back' button is clicked", () => {
      cy.contains("button", "Go back").click();

      cy.contains("h2", "Accomplishments").should("be.visible");

      cy.get("input.input").should("have.value", "");
      cy.get(".h-32").should("have.value", "");
      cy.get(".checkbox").should("be.checked");
    });
  });

  describe("Rewards", () => {
    it("should render mocked rewards", () => {
      cy.intercept("GET", "http://localhost:3333/rewards", {
        fixture: "rewards.json",
      });

      cy.get(".hidden > :nth-child(3) > .btn").click();

      cy.contains(/eddie munson/i).should("be.visible");
      cy.contains(/best dev/i).should("be.visible");
      cy.contains(/better person/i).should("be.visible");
    });

    it("should show error when content is not appropriate", () => {
      cy.intercept("POST", "http://localhost:3333/rewards", (req) => {
        if (req.body.title.includes("bad") || req.body.body.includes("bad")) {
          req.reply((res) =>
            res.send({
              status: 406,
              body: {
                msg: "Your content is not appropriate",
              },
            })
          );
        }
      });

      cy.get(".hidden > :nth-child(2) > .btn").click();

      cy.get("input.input").type("Bad Accomplishment");
      cy.get(".h-32").type("New bad Accomplishment Description");
      cy.get(".label-text").click();

      cy.get(".form-control > .btn").click();

      cy.contains(/accomplishment sent successfully/i).should("not.exist");
      cy.contains(/your content is not appropriate/i).should("be.visible");
    });

    it("should toggle like", () => {
      cy.get(".hidden > :nth-child(3) > .btn").click();

      cy.get(":nth-child(1) > .w-20 > svg").click().wait(2000);

      cy.get(":nth-child(1) > .w-20 > svg > g > g").should(
        "have.attr",
        "style",
        "display: none;"
      );

      cy.get(":nth-child(1) > .w-20 > svg").click().wait(2000);

      cy.get(":nth-child(1) > .w-20 > svg > g > g").should(
        "have.attr",
        "style",
        "display: block;"
      );
    });

    describe("handling with real server", () => {
      it("should render new accomplishments", () => {
        cy.login();

        cy.get(".hidden > :nth-child(2) > .btn").click();

        cy.get("input.input").type("New Accomplishment");
        cy.get(".h-32").type("New Accomplishment Description");
        cy.get(".label-text").click();

        cy.get(".form-control > .btn").click();

        cy.get(".hidden > :nth-child(3) > .btn").click();

        cy.contains(/new accomplishment/i).should("be.visible");
      });
    });
  });
});
