# _**Jenkins Setup**_
### A Test Server Setup readme "test_server_setup.md" can be found [here](https://github.com/srchap78/examensarbete/test_server_setup.md) at the [code repository](https://github.com/srchap78/examensarbete/) at https://github.com/srchap78/examensarbete/
#
### The main readme "README.md" can be found [here](https://github.com/srchap78/examensarbete/readme.md) at the [code repository](https://github.com/srchap78/examensarbete/) at https://github.com/srchap78/examensarbete/
#
# Current Login/Password is user/1234 Jenkins URL: http://localhost:8080/
## Initial Setup (Skip this unless setting up a new Jenkins server)
* Access Jenkins by using the test server's IP address on port 8080 in a web browser. 
* When prompted for the default installation password, it can be found at /var/lib/jenkins/secrets/initialAdminPassword on the test server.
* Click "Install suggested plugins"
* Enter Username and Password when prompted. Save these as these are the administrator credentials for the Jenkins server. Confirm the password and enter name and email. Then Click
* "Save and Continue."
* Unless you need to otherwise, leave the jenkins url of the instance configuration as the default. Click "Save and Finish."
* Click "Start using Jenkins."
## Install Plugins
#
### TestCafe
* Click "Manage Jenkins" under Dashboard
* Click "Manage Plugins"
* Click the "Available" tab and then enter Testcafe in the search bar
* Check the box next to TestCafe and click "Download now and Install after Restart"
### _**Initial setup should now be complete**_
#
#
# Configuring Jenkins Build to trigger with a push to the Code Repository
* Click "New Item" in the Jenkins dashboard
* Type in a name for the item
* Select "Freestyle Project" and click the "OK" button
* Click the radial button next to Git
* Enter url to repo (https://github.com/srchap78/examensarbete) in the Repository URL Box
* Check the box next too GitHub hook trigger for GITScm polling
* Click Build step and select execute shell
* Enter testcafe "chrome:headless" tests in the command box
* Click save



