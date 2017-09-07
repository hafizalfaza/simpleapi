import { Feedback } from '../models/feedback';


export const getFeedback = (callback) => {
    
    Feedback.findAll()
        .then((res) => {
            callback(null, res)
        }).catch((err) => {
            callback(err, null)
        })
}


export const submitFeedback = (data, callback) => {

    Feedback.create(data)
        .then((res) => {
            callback(null, res)
        }).catch((err) => {
            callback(err, null)
        })
}

export const updateFeedback = (data, callback) => {

    Feedback.update(data, {
        where: {
            id: data.id
        }
    }).then((res) => {
        callback(null, res)
    }).catch((err) => {
        callback(err, null)
    })

}