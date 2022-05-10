Feature('My First Test');

Scenario('test something', async ({ I }) => {
    I.amOnPage('https://www.gelbeseiten.de/Suche/hundefutter/Mannheim');
    I.wait(5);
    I.say('hi');
    I.click('Akzeptieren')
    I.wait(2);
    const htmlMitOeffnungszeit = await I.grabHTMLFrom('.oeffnungszeitKompakt')

    I.say(htmlMitOeffnungszeit)
});