const connection = require('../config/connection');
const User = require('../models/User')

console.log('seeding')

connection.once('open', async () => {
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users')
    }
})