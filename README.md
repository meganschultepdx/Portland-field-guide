# Portland Field Guide
## By: **_Stuart Mckay, Reese Lee, Brooke Kullberg, Megan Sculte, AJ Ancheta_**

#### _JavaScript, Week 5 Independent Project, *06.27.2019*_

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description
This is a buildout to allow users to search local native and invasive plants in Portland, OR. 


## Technologies Used

  * Angular Version 5.2.0
  * Typescript Version 2.5.3
  * Firebase Database 3.9.0

## Setup Instructions for accessing the Application

#### To view project file
* Clone this GitHub repository "https://github.com/meganschultepdx/Portland-field-guide.git" to your desktop. 
* Open the repository in a preferred text editor such as Atom or Visual Studio Code.

#### To run the application
* As the apiKey for the Firebase database is ignored, the user must create their own app on [Firebase](https://firebase.google.com/). 
* Once the app is created, navigate to the account `Project Overview` of the app and scroll down to `Firebase SDK snippet`, and select `Config`
*  Copy over the script to a file that you must create `./src/app/api-keys.ts`
* Navigate to your machine's terminal and enter the following commands within the main project directory

`npm install` This will allow the viewer of this project to have access to the CLI (command line interface) for webpack.

`ng serve` in the project directory in Terminal. Go to http://localhost:4200/ in the browser of your choice. Note: The app will automatically reload if you change any of the source files. This is a continuous monitoring so to stop it just type the key combination `Ctrl + C` within the terminal.

## Completed and in progress features

- [x] Navigation bar
- [x] Footer navigation bar
- [x] Database is saved on Firebase
- [ ] Program is deployed

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
There are no known bugs. 

## Support and contact details
This application 

Copyright (c) 2019 **_Stuart Mckay, Reese Lee, Brooke Kullberg, Megan Sculte, AJ Ancheta_**
