describe('Game initialization', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/people**', {
        delay: 1000,
        fixture: 'people.json',
      }).as('getPeople');
      cy.intercept('GET', '**/starships**', {
        delay: 1000,
        fixture: 'starships.json',
      }).as('getStarships');

      cy.visit('/');
    });

    it('should show loader while fetching data', () => {
      cy.get('[data-cy="app-loader"]').should('exist');
      cy.wait('@getPeople');
      cy.wait('@getStarships');
      cy.get('[data-cy="app-loader"]').should('not.exist');
    });
});

describe('Resource picker', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/people**', {
      delay: 1000,
      fixture: 'people.json',
    }).as('getPeople');
    cy.intercept('GET', '**/starships**', {
      delay: 1000,
      fixture: 'starships.json',
    }).as('getStarships');

    cy.visit('/');
    cy.wait('@getPeople');
    cy.wait('@getStarships');
  });

    it('should show the resource picker after loader', () => {
      cy.get('[data-cy="app-resource-picker"]').should('exist');
      cy.get('[data-cy="resource-picker-people"]').should('exist');
      cy.get('[data-cy="resource-picker-starships"]').should('exist');
    });

    it('should start a People battle when People is selected', () => {
      cy.get('[data-cy="resource-picker-people"]').click();
      cy.get('[data-cy="app-game"]').should('exist');
      cy.get('[data-cy="app-game-card"]').should('have.length', 2);
    });
  
    it('should start a Starships battle when Starships is selected', () => {
      cy.get('[data-cy="resource-picker-starships"]').click();
      cy.get('[data-cy="app-game"]').should('exist');
      cy.get('[data-cy="app-game-card"]').should('have.length', 2);
    });
});


describe('Game', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/people**', {
      delay: 1000,
      fixture: 'people.json',
    }).as('getPeople');
    cy.intercept('GET', '**/starships**', {
      delay: 1000,
      fixture: 'starships.json',
    }).as('getStarships');

    cy.visit('/');
    cy.wait('@getPeople');
    cy.wait('@getStarships');
    cy.get('[data-cy="resource-picker-people"]').click();
  });

  it('should display a winner or a draw after battle', () => {
    cy.get('[data-cy="result"]').then(($result) => {
      const text = $result.text();
      expect(text).to.match(/The winner is:|No winner this time!/);
    });
  });
});

describe('New Battle', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/people**', {
      delay: 1000,
      fixture: 'people.json',
    }).as('getPeople');
    cy.intercept('GET', '**/starships**', {
      delay: 1000,
      fixture: 'starships.json',
    }).as('getStarships');

    cy.visit('/');
    cy.wait('@getPeople');
    cy.wait('@getStarships');
  });

  it('should reset winner and display new cards', () => {
    cy.get('[data-cy="resource-picker-people"]').click();
    cy.get('[data-cy="new-game-button"]').click();
    cy.get('[data-cy="app-resource-picker"]').should('exist');
  });
});