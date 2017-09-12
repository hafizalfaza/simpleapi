import { getUserById } from '../../db/controllers/user';
import { Update } from '../../db/models/update';
import { User } from '../../db/models/user';



export const getAllUpdates = (callback) => {
    Update.findAll({include : [User] })
        .then((res) => {
            callback(res)
        }).catch((err) => {
            console.log(err)
            callback(err)
        })
}

Update.belongsTo(User, {foreignKey : 'user_id'});