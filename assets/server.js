const express = require('express');

const sequelize = require('./config/connection');

const routes =  require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    try {
        console.log(`Get req`);
        res.status(200).json('Working');
    } catch (err) {
        console.log(`Get req not work, ${err}`);
        res.status(500).json(`Not working, ${err}`);
    }
});

app.use('/api', routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Server up'));
});