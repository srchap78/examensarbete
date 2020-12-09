# _E2E Testing Readme_
##### *This readme is a work in progress and was written with windows and vscode in mind. Mac and Linux user's mileage may vary!
#
## **The code repository is found at** https://github.com/srchap78/examensarbete
#
## **A Test Server Set Up Readme can be found [here](https://github.com/srchap78/examensarbete/test_server_setup.md) at** https://github.com/srchap78/examensarbete/test_server_setup.md
#
Work off of a local branch and only push to origin/main when your tests are complete and working.
* [Common git commands](https://github.com/joshnh/Git-Commands)
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
* See page object model (POM) in [pom folder ](../pom/)
* See testExamples.js in the project root directory and tests in [test folder](./tests)
* Use emails and any names created specifically for testing the UI
* Don't forget to consult [Testcafe documentation](https://devexpress.github.io/testcafe/documentation/guides/) or [Javascript's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) or [Google](https://google.com) when you run into a problem!
#
### **Feature list to work off of to write tests:**
* [Traxmate feature list](https://docs.google.com/spreadsheets/d/18XI2scWRv_DOQmJerCm1IMdHykxqxeg6KiddbGsufdg/edit#gid=0)
#
### **Test account emails:**
Please put any email accounts used for testing here
1. Regular account: trax.ui.tests.reg@gmail.com password: Face789789<br><br>
  **Always use the company name "UI Test" - first name "UI" - last name "Test"** --
  This is how the account is found later by an API call or search on the webpage and deleted<br><br>
2. Super user account: trax.ui.tests.super@gmail.com password: Face789789<br><br>
   **Do not delete** this account in your tests
#

### **If you want to use an API call to delete account**
Postman Collection to delete the trax.ui.test.reg account is called Delete_UI_test_accounts. There is a postman enviornment called UI Tests to use along with it.
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
  .meta('TFID-124', 'TFID-127')

//the actual test. t is for testcontroll and it is a method of testcafe that allows interaction.
test("test name", async t =>{

    //this test expects variableName.variableFromClass to be true
    t.expect(variableName.variableFromClass.exists).ok;
})
```
Test Code example:  
```js
import LoginPOM from '../pom/login.tab.js'
import PlacesPOM from '../pom/places.tab.js'

const Login = new LoginPOM();
const Places = new PlacesPOM();

fixture `Add a new place`
  .page("https://online.staging.traxmate.io/#/pages/places/myPlaces")
  .meta("TFID-39")

test("check for add new tab", async t => {
  Login.loginUser(t);
  await t
    .click(Places.places)
    .expect(Places.addNew.exists).ok;
})
```
#
#
# Running Tests Locally
#### The following command will run all tests in the tests folder locally with Chrome and place a report.json file in the reports folder
```
npm test

```
change the 
#
####
# Running Tests with Jenkins
### Setup
[Integrate Testcafe with Jenkins](https://devexpress.github.io/testcafe/documentation/guides/continuous-integration/jenkins.html)<br><br>
As of 13/11/20, automated tests are setup in Jenkins using the ["Traxmate UI Tests"](http://52.214.99.100:8080/view/Traxmate/job/Traxmate%20UI%20Tests/configure) build in the "Traxmate" view that will run on the jenkins node "UI Testing."<br><br>
This build clones the repo and then runs tests. Currently it will run all tests in the tests folder. Add/remove/replace parameters to the command in execute shell to specify which tests are to be run and how. <br><br>
When creating new builds be sure to check the box next to "Restrict where this project can be run" and use the label expression "UI Testing" so the build will run on the UI test server.
#
#
### Reporting to Opmate:
In the reports folder is the file opmateReporter.js. The build step "node run-script report" runs the code in the file and sends selected data from report.json(which is created everytime testcafe is ran) to Opmate.<br><br>
If testing locally 

#
#
# UI Test Server
The test server is located at [ubuntu@testcafe.combain.com](https://ubuntu@testcafe.combain.com)<br><br>
The .pem file for authentication can be found in google drive at [/products/traxmate/testcafe.pem](https://drive.google.com/file/d/1bO6Ka3JDIqySKRFAWxpTRtS4voCxiO-S/view?usp=sharing)<br><br>
The server is set up with node.js, node module: testcafe(installed globally), node module: axios(installed every build), and chrome for testing. A java runtime environment is also installed as it is needed so the server can be a slave for jenkins.<br><br>
The label for this server in Jenkins is "UI Testing"
#
#
