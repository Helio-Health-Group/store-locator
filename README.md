# store-locator

### Description

This project is a good example of a Simple Store Finder. It was written using pure javascript
front end code without any 3rd party libraries other than Google Maps/Axios. While it is a good example it can be made
better! For this example we'd like to see it re-written in a React Frontend using functional react components
and TypeScript. This is an open-ended exercise which allows you to pick which UI components/styling libraries you get
to choose. 

##### The only hard requirements for the rewrite are:

- Recapture the same basic functionality of the app:
    - E.g., enter a zip code to get a list of Stores Plotted to a map (see pure JS Example for functionality).
    - Note: The stores' data is a limited set, so look at the `stores.json` example for valid zip codes for testing.
- Use React Functional Components (i.e., using a relatively recent version of React 16/17).
- Use the Backend API Service provided. You are free to re-write all or potions of this service, but it is not required
for this exercise.
- Use TypeScript
- Use a npm package.json file to capture all dependencies (Running Create React App does this for you)
- Use Node v.12 or higher.

Some recommendations to get Started (but absolutely not required here):
- Initialize with Create React App: https://create-react-app.dev/docs/adding-typescript/
- Use a React Map Component Lib (not required)

### Backend
Is just a simple service using MongoDB to run a distance search against the Lat/Lng. The `stores.json` is in the stores
collection and called with the `http://localhost:3000/api/stores` endpoint. Again, you are free to modify this service
as needed, but please take note of your changes, so they can be accounted for in the review.

To install go to the root of the backend and run `npm install`. After installation is complete, you should be able to
run the service.
To run, put the attached .env file in the root of the backend and run `npm start` from the backend root, or add the
env variables to your system/user/run environment.

Note: the .env file we attached in the email contains the 4 env variables needed to run the backend app

`DB_USER=<user>`

`DB_PASSWORD=<password>`

`DB_SERVER=<hostname>`

`MQ_API_KEY=<api_key>`

If you do not have it let the Helio
contact know!

### Frontend
This is the target for the rewrite. It currently works well if run locally either through an IDE or a npm dev webserver
(not currently included). You are free to reuse this space or create a new npm project entirely, up to you as long as
the core requirements are met. Note: a dev FE webserver is not included here install an NPM one if it is desired to try
out the Pure JS example.

Also, you will need to install the Google Maps Key in the index.html to try the sample and/or use in your own version.
If for some reason you did not get one, let us know (our key should also be included in the .env file for your use). 
You are also free to use your own if you want (they are free), but please let us know if you do not include it in 
the submission. 

### Final Notes:

- Submit your own work! It's ok to use code-snippets from the old version, and/or stack-overflow, but paraphrase or 
rewrite in the spirit/purpose of the functionality of this app.
- Your choice of libraries are up to you. Be prepared to explain your choices here.
- Feel free to choose or improve the UI/styling, it's not required, but it can help!
- There are bugs and simple input behavior in this example - try to fix/improve them!
- For submission please zip up the project minus the npm modules or any other files excluded by the .gitignore, 
  and send it back via email. Feel free to email any questions or clarifications if unsure here.
- There is no time limit, only what you need to complete this project.

Thank you,

HelioArgos Team
