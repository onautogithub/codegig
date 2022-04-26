# codegig
An article written by Vinesh How to create a RESTful CRUD application using Node.js, Express, And Sequelize
Node.js. I used mySQL as my database.
The article can be found here: https://medium.com/techno101/crud-using-node-js-express-and-sequelize-82c10ef3b346

I believe Traversy Media on YouTube created a video: https://www.youtube.com/watch?v=bOHysWYMZM0

Get Started:
mkdir codegig
cd codegig
npm init -y
cd codegig
mkdir server (I always separate my frontend from the backend - Client / Server
cd server
npm i body-parser express pg pg-hstore sequelize cors
npm i --save-dev nodemon 

Add/Edit package.json to add the following:

    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
    },
    
    NOTE: 
    1) In my case, I renamed index.js to server.js
    2) I placed the various files in different directories under src to separate them
    3) There is an error in the article in the index.js file (which in my case is server.js).
    that I fixed. router.use('/', gigRoutes); should be router.use('/gigs', gigRoutes);
