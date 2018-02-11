let mailOperaions = require('./quickstart.js');

Feature('Mailing Service');

Scenario('Check if mails are sent once 9 hours', (I) => {
    I.amOnPage('http://www.protractortest.org/#/');
    console.log(mailOperaions.listMessages());
});



