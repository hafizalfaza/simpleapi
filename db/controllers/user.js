import {User} from '../models/user';
import crypto from 'crypto';

export const registerUser = (data, callback) => {

    const {role} = data;

    let roleMerged = '';

    role.map((eachRole, i) => {
        roleMerged = roleMerged+eachRole+';'
    }) 

    User.create({
        username: data.username,
        full_name: data.full_name,
        password: crypto.createHash('md5').update(data.password).digest("hex"),
        email: data.email,
        role: roleMerged
    }).then((user) => {
        callback(null, user);
    }).catch((err) => {
        callback(err, null);
    })
}


export const userLogin = (data, callback) => {
    User.findOne({
        where: {
            $or: [
                {
                    username: data.identifier
                },
                {
                    email: data.identifier
                }
            ]
        }
    }).then((user) => {
        callback(null, user)
    }).catch((err) => {
        callback(err, null);
    })
}


export const getUserById = (id, callback) => {
    User.findById(id).then((user) => {
        callback(null, user)
    }).catch((err) => {
        callback(err, null);
    })
}

export const changeUserPassword = (queryData, callback) => {

    User.update({
        password: queryData.newPassword
      },
      { where: { id: queryData.id } }).then((result) => {
        callback(null, result)
      }).catch((err) => {
          callback(err, null)
      })
}