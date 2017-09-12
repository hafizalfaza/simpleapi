import {User} from '../models/user';
import { Update } from '../models/update';
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
        role: roleMerged,
        full_name: data.full_name,
        panggilan: data.panggilan,
        nik: data.nik,
        status: data.status,
        position: data.position,
        extension: data.extension,
        ip_phone: data.ip_phone,
        phone_number: data.phone_number,
        directorate: data.directorate,
        group: data.group,
        department: data.department,
        sumber: data.sumber,
        jabatan: data.jabatan,
        job_title: data.job_title,
        tmt_kerja: data.tmt_kerja,
        tahun_masuk: data.tahun_masuk,
        dob: data.dob,
        gender: data.gender,
        agama: data.agama,
        strata: data.strata,
        jurusan: data.jurusan,
        universitas: data.universitas,
        tahun_lulus: data.tahun_lulus,
        jurusan_s1: data.jurusan_s1,
        is_employee: data.is_employee,
        commitment: data.commitment,
        profile_picture: data.profile_picture,
        priority: data.priority,
        priority_dir: data.priority_dir,
        redirect_page_id: data.redirect_page_id,
        is_rkk_committee: data.is_rkk_committee,
        created_by: data.created_by,
        updated_by: data.updated_by
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

User.hasMany(Update, {foreignKey : 'user_id'});