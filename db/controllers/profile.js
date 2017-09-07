import { getUserById } from '../../db/controllers/user';
import { User } from '../../db/models/user';


export const getProfileById = (id, callback) => {
    getUserById(id, (err, userData) => {
        
        if(err){
            callback(err, null)
        }
        
        if(userData){
            delete userData.dataValues.password;
            callback(null, userData.dataValues)
        }else{
            callback(err, {message: 'profile not found'})
        }
    })
}

export const updateProfileData = (queryData, callback) => {

    User.update(queryData,
      { where: { id: queryData.id } }).then((result) => {
        callback(null, result)
      }).catch((err) => {
          callback(err, null)
      })
      
}