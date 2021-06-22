const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema(
  {
    name:{ 
      type: String,
      required: [true, 'Name required']
    },
    lastaName: { 
      type: String,
      required: [true, 'Last Name required']
    },
    email: { 
      type: String,
      required: [true, 'Email required'],
      unique: true,
      index: true
    },
    birthdate: Date,
    password: { 
      type: String,
      required: [true, 'Pasword required']
    },
    role: { 
      type: String,
      required: true,
      default: 'USER_ROLE',
      enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    enable: { 
      type: Boolean,
      required: true,
      default: true
    }
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, {message: 'already exist in DB'})
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('users' ,userSchema)