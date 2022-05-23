const express = require('express');
const router = express.Router();

const cors = require('cors');
router.use(cors({origin: "http://localhost:3000"}));

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

let bookModel = require('../../models/book');
const getBook = require('./bookGetters/general').getBook;

router.post('/registerBook', async (req, res) => {
    let doc = new bookModel(req.body);
    res.json(await doc.save());
});

router.post('/updateBook', async (req, res) => {
    updateBook = async (book) => {
        for(const key in req.body.newValues){
            book[key] = req.body.newValues[key];
        }
        return res.json(await book.save());
    }
    book = await getBook(req.body.issn);
    if(book != null) return updateBook(book);
    res.json(null);
})

module.exports = router;