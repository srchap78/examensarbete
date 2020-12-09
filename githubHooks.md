# Setting up GitHub with a webhook to trigger tests
* Go into the settings of the repository
* Click on "Webhooks" on the left hand side
* Click the "Add webhook" button in the top right
* In the Payload URL box, enter the IP address of the Jenkins server along with /github-webhook/ on the end
* Make sure the box next to "Active" is checked
* Click the "Add webhook" button at the bottom