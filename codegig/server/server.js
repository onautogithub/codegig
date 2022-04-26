const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const gigRoutes = require('./src/routes/gigRoutes');
const cors = require('cors');


router.use('/gigs', gigRoutes);
module.exports = router;

//Database Connection
const db = require('./src/config/configdb');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));
//Gig routes
app.use('/gigs', require('./src/routes/gigRoutes'));




const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));