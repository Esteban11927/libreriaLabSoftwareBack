const express = require('express');
const router = express.Router();

const cors = require('cors');
router.use(cors({origin: "http://localhost:3000"}));

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const bcrypt = require('bcrypt');

const userGetter = require('./userGetters/general');

let userModel = require('./../../models/user');

/**
 * Insert user
 */
router.post('/registerUser', async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let doc = new userModel(req.body);
    doc.save();
    res.end();
    //res.send(req.body);
})

router.post('/getUser', async (req, res) => {
    user = await userGetter.getUserByUnique(req.body.id, req.body.email, req.body.username);
    res.json(user);
})

router.post('/updateUser', async (req, res) => {
    let updateUser = async (user) => {
        newValues = req.body.newValues;
        for(let key in newValues){
            user[key] = newValues[key];
        }
        return res.json(await user.save());
    }
    user = await userGetter.getUserByUnique(req.body.id, req.body.email, req.body.username);
    if(user != null) return updateUser(user);
    res.json(null);
})

router.post('/delete-many', (req, res) => {
    userModel.deleteMany({}, {}, (err) => {
        res.send("okay");
    });
})

module.exports = router;