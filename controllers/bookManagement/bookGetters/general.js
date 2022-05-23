bookModel = require('../../../models/book');

async function getBookByISSN(issn){
    return await new Promise(async (resolve, reject) => {
        let book = await bookModel.findOne({issn: issn}).exec();
        resolve(book);
    })
}

module.exports = {
    getBook: getBookByISSN
}