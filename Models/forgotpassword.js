const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const restpassSchema = new Schema ({
    active:{
        type:Boolean,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    uuid:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Forgotpassword' , restpassSchema)


// const Sequelize = require('sequelize');
// const sequelize = require('../Util/database');

// //id, name , password, phone number, role

// const Forgotpassword = sequelize.define('forgotpassword', {
//     id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true
//     },
//     active: Sequelize.BOOLEAN,
//     expiresby: Sequelize.DATE
// })

// module.exports = Forgotpassword