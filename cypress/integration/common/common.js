import { defineStep } from 'cypress-cucumber-preprocessor/steps';

defineStep('I want to wait {int} milliseconds', time => {
	cy.wait(time);
});

defineStep('I see {string} in the title', title => {
	cy.title().should('include', title);
});

defineStep('I see {string} in the url', url => {
	cy.url().should('include', url);
});

defineStep('I Reload the browser', url => {
	cy.reload();
});

defineStep('I insert {string} in the {string} table', (recordId, queueTable) => {
	const SQL_INSERT_RECORDID_INTO_QUEUETABLE =
		'INSERT INTO cmsuser.' + queueTable + ' (recordid) VALUES (' + recordId + ')';

	cy.writeFile(Cypress.env('JSON_LOCATION'), { "messages": [] });
	cy.task('sqlQuery', SQL_INSERT_RECORDID_INTO_QUEUETABLE).then(
		resolvedValue => {
			cy.log(resolvedValue);
		}
	);
});
