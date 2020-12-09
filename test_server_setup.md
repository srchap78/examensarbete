# _**Test Server Setup**_
****This Guide assumes you have downloaded and installed Ubuntu Live Server the platform you will be using to run tests.****<br>
To download please goto this [link](https://ubuntu.com/download/server). <br>
Follow the installation guide [here](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview).
#
The following packages are required:
1. Node.js and NPM
2. Testcafe
3. Java Runtime Environment
4. Google Chrome
5. Jenkins
#
## **You may be required to enter the user password when installing packages and you will be asked if you want to install by typing "Y" or "N." These steps are not listed in the instructions below but enter the user password and type "Y" when prompted.**
#
#
## Updating Linux packages
Type the following command to update all packages:
```
sudo apt update
```
Type the following command to install upgrades:
```
sudo apt upgrade
```
#
#
## Node.js and NPM
Type the following command to install Node.js
```
sudo apt install nodejs
```
Type the following command to install NPM
```
sudo apt install npm
```
#
#
## Testcafe
Type the following command to install testcafe globally
```
sudo npm install -g testcafe

```
#
#
## Java Runtime Environment
This is needed for Jenkins
Type the following command to install JRE 11
```
sudo apt install openjdk-11-jre-headless 
```
#
#
## Google Chrome
To install Google Chrome, type the following commands:<br><br>
First, add the Google Chrome repository on your system using the following command: 

```
$ wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
```
Type this command to add the package repository: 
```
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
```
Now update packages with this command:
```
sudo apt-get update

```
Install Google Chrome with this command:
```
sudo apt-get install google-chrome-stable
```
## Jenkins
Type the following commands to install Jenkins. Run each command separately.
#
Jenkins has its own repository for Linux systems… Run the command below to add its repository key to Ubuntu:
```
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

```
Then run the command below to add the package repository (all one line):
```
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list

```
Now install Jenkins with the followign two commands:<br>
This command updates packages
```
sudo apt update

```
This command installs Jenkins:
```
sudo apt install jenkins
```
The default port is 8080. To access Jenkins remotely you will use the servers IP address with :8080 on the end. For example if the servers IP address is 53.12.256.2, Jenkins address would be 53.12.256.2:8080.

**Jenkins can be setup by following the guide [here](https://github.com/srchap78/examensarbete/jenkins_setup.md) in the root folder of [the code repository](https://github.com/srchap78/examensarbete) at https://github.com/srchap78/examensarbete/jenkins_setup.md**
#
#
## _**Server setup should now be complete.**_