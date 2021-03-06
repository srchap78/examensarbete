# _E2E Testing Readme_
##### *This readme is a work in progress and was written with windows and vscode in mind. Mac and Linux user's mileage may vary!
#
## **The code repository is found at** https://github.com/srchap78/examensarbete
#
Work off of a local branch and only push to origin/main when your tests are complete and working.
* [Common git commands](https://github.com/joshnh/Git-Commands)
#
#
## **A Test Server Set Up Readme can be found [here](https://github.com/srchap78/examensarbete/test_server_setup.md)** 
#
## **Jenkins setup and build guide can be found [here](https://github.com/srchap78/examensarbete/blob/master/jenkins_setup.md)**
#
## **Github webhooks guide can be found [here](https://github.com/srchap78/examensarbete/blob/master/githubHooks.md)**
#
#
## **Requirements:**
#### Node.js and npm are required. Type the following in a terminal to check if you have it installed if you are unsure:
```
node -v
```
```
npm -v
```
[Install nodejs](https://nodejs.org/en/download/). NPM will be installed along with node.js. 
#
#
#### The browser you wish to be tested on needs to be installed on the machine running the tests:
[Install Chrome](https://www.google.com/chrome/)
#
#
#### To install testcafe, in a terminal type (add -g to install globally)

```
npm i testcafe
```
[Testcafe documentation](https://devexpress.github.io/testcafe/documentation/getting-started/)
#
#

### Optional:
#### Testcafe studio is an IDE that makes writing tests easy. free 30 day trial. Using this   makes recording tests very easy but if using page models then the code needs to be adjusted in the IDE or after exporting.
[Testcafe Studio](https://www.devexpress.com/products/testcafestudio/#)

[Testcafe Studio documentation](https://docs.devexpress.com/TestCafeStudio/400157/testcafe-studio)
#
#
#### There are VSCode extensions that will make things a little easier:
* [TestCafe Test Runner](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner) - This will let you run tests by right clicking and making a selection
#
#
#
# Writing Page Objects and Tests
* Javascript is used
* See page object model (POM) in pom folder
* See test examples in the test folder
* Don't forget to consult [Testcafe documentation](https://devexpress.github.io/testcafe/documentation/guides/) or [Javascript's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) or [Google](https://google.com) when you run into a problem!
#
**POM Code template:**
```js
//import desired items from the testcafe module
import { Selector } from 'testcafe';

//export class so it can be used in tests
export default class name {
  constructor() {
    //list all html elements  
    this.nameOfvariable = Selector("selector")
    this.anotherName = Selector("another Selector")
  }
}
```
example:
```js
import { Selector } from 'testcafe';

export default class LoggedPOM {
  constructor() {
    this.dashboard= Selector("a[title='Dashboard'] > .menu-title")   
  }
}
```
**Test Code template:**
```js
//import any POMs needed for your tests
import class from '../pom/*.tab.js';

//initialize a variable to make it easier on yourself!
const variableName = new className ();

//Every test file needs to have one or more fixtures encapsulated with backticks. 
//A fixture needs to have at least one test but can include as many tests as desired.
  fixture `I am testing this!`

  //the website url to be tested
  .page('url to website')

  //we can also include metadata for our tests. This meta is giving the TFID for instance. We can later run tests just by specifying the meta data!
  .meta('chrome', true)

//the actual test. t is for testcontroll and it is a method of testcafe that allows interaction.
test("test name", async t =>{

    //this test expects variableName.variableFromClass to be true
    t.expect(variableName.variableFromClass.exists).ok;
})
```
Test Code example:  
```js
import HomePAGE from '../pom/homePage.js'

const Home = new HomePAGE();

fixture `Homepage is there`
    .page("http://automationpractice.com/index.php")
    .meta('TFID-39', 'true')

test
    ("Summer Dresses category has printed chiffon dress", async t => {
        await t
            .click(Home.dresses)
            .click(Home.summerDresses)
            .expect(Home.summerDressesLogo.exists).ok;
            
    });
})
```
#
#
# Running Tests Locally
#### The following command will run all tests in the tests folder locally with Chrome and place a report.json file in the reports folder
```
npm test

```