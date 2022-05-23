userModel = require('../../../models/user');

async function getUserById(id){
    return await userModel.findOne({id: id}).exec();
}

async function getUserByEmail(email){
    return await userModel.findOne({email: email}).exec();
}

async function getUserByUsername(username){
    return await userModel.findOne({username: username}).exec();
}

async function getUserByUnique(id, email, username){
    return await new Promise(async (resolve, reject) => {
        let user = await getUserById(id);
        if(!(user == null)) resolve(user);
    
        user = await getUserByEmail(email);
        if(!(user == null)) resolve(user);
    
        user = await getUserByUsername(username);
        if(!(user == null)) resolve(user);
        
        resolve(user);
    })
}

module.exports = {
    getUserById: getUserById,
    getUserByEmail: getUserByEmail,
    getUserByUsername: getUserByUsername,
    getUserByUnique: getUserByUnique
}