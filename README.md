# GRASP

Gang Risk Assessment and Suppression Program (GRASP) is an app that allows anyone in Los Angeles county to assess the risk of the children in their lives becoming involved with a gang, and offers advice on how to suppress that risk. Other cities and counties throughout the state and country will be added as the data/resources become available.

## Installation

### Step 1 - Start Mongodb
Open a terminal and run the following:

```bash
  mongod
```

### Step 2 - Server
Open a second terminal, navigate to the project's `server` directory and run the following:

```bash
  npm install
  node index
```

### Step 3 - Client
Open a third terminal, navigate to the project's `client` directory and run the following:

```bash
   npm install
   npm start
```

## App use

### Home page

Here users encounter an intro blurb explaining who the app is for, why there is a need for it, and what it aims to accomplish. From this page users can navigate to `Learn More`, or click `Create Assessment`.

### Learn More

This page provides information on the correlation between California's high prison population and the criminal street gangs of it's inner cities. It also details how organizations profit from prisons by pushing for tougher sentencing laws. Users can also click to create an assessment from here.

### Create Assessment

Users are given a form to fill out to provide their information. If a user already exists, users are asked if they would like to continue as current user or create a new user. Creating a new user deletes current user so that there is only one user per session. User is then asked to provide child's info. and asked a series of questions in order to obtain a risk factor rating based on their answers and the child's characteristics -age, gender, race, etc.

### User page

Here users can see the results of the risk assessments they created of each child. Provided with each assessment is feedback on how to better recognize and suppress any risks, if they exist. They can also choose to update or delete each assessment, create another assessment, or delete user altogether. Here the user is informed that a child's high or low risk factor rating is not a true indication that the child would or would not become involved with a gang.

### About Us

From a link in the navbar, users can navigate to this page from anywhere in the app. Here users are provided a photo and blurb of each of the four contributors to the app.

### Contact Us

Also from a link in the navbar, this is where users can get in contact with us to either offer assistance, ask questions, leave comments, and/or express any concerns.
 
 ### Error page
 
 A custom error page is displayed to inform the user that the url entered was not found. A button allows the user to navigate back to the home page.
 
 
## Acknowledgments ##

A big thank you goes out to TLM Remote Instruction Team, TLM Academic Support Team, classroom facilitator, fellow TA, and classmates for their help and feedback throughout this project.

## Note ##

As more data becomes available, the risk factor rating algorithm could be updated to better reflect the varying risks faced by those of certain racial/ethnic backgrounds in the different neighborhoods throughout each individual city.
