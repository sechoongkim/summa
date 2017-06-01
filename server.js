
const User = require('./models/User');
const Promise = require('sequelize').Promise;
const db = require('./server/db')
const seedUsers = () => {

    const users = [
        {
            name: 'Test',
            email: 'testing@fsa.com'
            
        },
        {
            name: 'Barack',
            email: 'obama@gmail.com'
    
        }
    ];

    const creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);
};

db.sync({ force: true })
    .then(() => {
        return seedUsers();
    })