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
        role: roleMerged
    }).then((user) => {
        callback(null, user);
    }).catch((err) => {
        callback(err, null);
    })


    
}