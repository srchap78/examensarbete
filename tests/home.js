import HomePAGE from '../pom/homePage.js'

const Home = new HomePAGE();

fixture `Homepage is there`
    .page("http://automationpractice.com/index.php")
    .meta('TFID-39', 'true')

test
    .meta({
        date: '3/12/20',
        author: 'Steve Chapman'
    })
    ("check for homepage", async t => {
        await t
            .expect(Home.logo.exists).ok;
    });

test
    ("Summer Dresses category has printed chiffon dress", async t => {
        await t
            .click(Home.dresses)
            .click(Home.summerDresses)
            .expect(Home.summerDressesLogo.exists).ok;
            
    });