# JID-3111-TruDiary
## Release Notes v 1.0.0
### Features
 * Users can register and log in, and such actions set a log in cookie used by the site
 * Users can navigate to the knowledge hub which hosts the key features: Events, Articles, and Support Groups
 * Articles are loaded from the backend where they are added by admin for readers to read
 * Comments can be added to articles by users
 * Events can be created, udpated, moved, and deleted by admin
 * Users can be added to events by admin
 * Users can join support groups, which can host various events
 * Admin can connect support groups to various events
### Bug Fixes
 * Events can now only be added/modified by an admin instead of any user.
 * The support groups list to choose from when creating an event now matches the support groups section in the knowledge hub.
### Known Issues
 * When a user posts a comment, it may raise an error in the backend when attempting to store the comment, and as a result the comment will not be saved under that article.


## Install Guide
### Pre-requisites
 * Must have a laptop or desktop computer device
 * Must have access to the terminal (mac) or command prompt (windows)
 * Must have MySQL downloaded on the device: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
 * Must have a code editor (IntelliJ is recommended): https://www.jetbrains.com/help/idea/installation-guide.html
### Dependent Libraries
 * Must install npm and Node.js: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
### Download instructions
 * Unzip the zip file that we provided to you
### Build Instructions
 * Open MySQL on your device
 * Open a new connection (the plus button next to MySQL Connections)
 * Connection Name: `trudiarysystem`
 * Connection Method: Standard (TCP/IP)
 * Hostname: `127.0.0.1`
 * Port: `3306`
 * Username: `root`
 * Password: Your root password
 * Default Schema: Leave blank
 * Open this connection by double clicking it
 * Create a new schema by right clicking in the "Schemas" tab and selecting "create schema".
 * Schema Name: `trudiarysystem` (default everything else and click apply)
 * Open the repository folder in your code editor (such as IntelliJ).
 * Use the left side panel file browser in your code editor to navigate to Backend2 > src > main > resources > and open application.properties
 * Where it says `spring.datasource.password=`, after the `=`, put your root password.
#### Backend
 * Use the left side panel file browser in your code editor to navigate to Backend2 > src > main > java > com.trudiary and open TruDiaryApplication.java.
 * Run the TruDiaryApplication class main method. There should be a green play button next to it in the file, click it.
#### Frontend
 * Open your terminal/command prompt at the clonded repository folder on your device, or use the integrated terminal in IntelliJ or any other code editor.
 * Navigate to the "Frontend" directory (type `cd Frontend` and hit enter)
 * Enter this command into terminal/command prompt: `npm install` (if this gives you errors, see the Troubleshooting section below)
### Run Instructions
 * Once you successfully run `npm install`, then in the same directory and terminal, run `npm start`
 * This should open your browser at localhost and display the website application
### Troubleshooting
 * If npm install gives dependency conflict errors, then try running `npm install --legacy-peer-deps`
 * If you are getting a root password error when trying to start the backend, ensure that `spring.datasource.password` is equal to your root password that is used for the MySQL connection you created.
 * If you do not see a green play button when trying to run the TruDiaryApplication class main method to start the backend, then right click on `src` directory and select option `Mark Directory As > Sources Root`.

## Previous Versions

## Release Notes v 0.4.0
### Features
 * Users can see articles that are stored in the database
 * New user registration creates a new user entry in the database
 * User login only goes through for users who are registered in the database
 * Users can see which support group is hosting an event
 * Admins can modify which support group is hosting an event
 * Passwords now saved to database using Argon2 encryption
### Bug Fixes
 * None
### Known Issues
 * User is not able to move from one support group to another yet, will be updated on next sprint.
 * Users do not need a password to login currently, will address in next sprint.
## Release Notes v 0.3.0
### Features
 * User ability to like articles
 * User ability to comment on articles
 * User login credentials persisting to update/view info pages
 * Admin can add user/ multiple users to a specific event
 * Admin can remove user/ multiple users to a specific event
### Bug Fixes
 * None
### Known Issues
 * State management getting complicated, will be resolved with redux support
 * User login not connected to backend, will be connected in next sprint
 * Articles not connected to backend, will be connected in next sprint
## Release Notes v 0.2.0
### Features
 * Articles Listing Page
 * Dynamic Article Reading Page
 * Article and Comment Database Support 
 * Sign up page
 * View information page
 * Login page
 * Admin access on Event Page
 * User access on Event Page
### Bug Fixes
 * Updated coloring from lime green to light grey
 * Admin can add, edit, delete an event
 * User can view what events are current on the event page
### Known Issues
 * Login not passing state to handle user login/sign up, will update using redux in future sprint
 * Articles not based on backend, will update in future sprint
 * User needs to have access on selecting specific events on their end, will work on that in future sprint
## Release Notes v 0.1.0
### Features
 * Navigation bar
 * Events Page
 * Knowledge Hub
### Bug Fixes
 * N/a
### Known Issues
 * Support Groups routing not functional
