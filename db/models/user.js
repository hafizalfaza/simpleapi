import {sequelize} from '../connection';

import Sequelize from 'sequelize';

export const User = sequelize.define('user', {
    role: {
      type: Sequelize.STRING(100)
    },
    full_name: {
      type: Sequelize.STRING(100)
    },
    panggilan: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    nik: {
      type: Sequelize.STRING(15)
    },
    password: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING(45)
    },
    position: {
      type: Sequelize.STRING(45)
    },
    extension: {
      type: Sequelize.STRING
    },
    ip_phone: {
      type: Sequelize.STRING
    },
    phone_number: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    date_created: {
      type: Sequelize.DATE
    },
    date_modified: {
      type: Sequelize.DATE
    },
    directorate: {
      type: Sequelize.STRING(100)
    },
    group: {
      type: Sequelize.STRING
    },
    department: {
      type: Sequelize.STRING
    },
    sumber: {
      type: Sequelize.STRING
    },
    jabatan: {
      type: Sequelize.STRING
    },
    job_title: {
      type: Sequelize.STRING(200)
    },
    tmt_kerja: {
      type: Sequelize.DATEONLY
    },
    tahun_masuk: {
      type: Sequelize.INTEGER
    },
    dob: {
      type: Sequelize.DATEONLY
    },
    gender: {
      type: Sequelize.STRING
    },
    agama: {
      type: Sequelize.STRING
    },
    strata: {
      type: Sequelize.STRING
    },
    jurusan: {
      type: Sequelize.STRING
    },
    universitas: {
      type: Sequelize.STRING
    },
    tahun_lulus: {
      type: Sequelize.INTEGER
    },
    jurusan_s1: {
      type: Sequelize.STRING
    },
    is_employee: {
      type: Sequelize.INTEGER
    },
    commitment: {
      type: Sequelize.INTEGER
    },
    profile_picture: {
      type: Sequelize.STRING
    },
    priority: {
      type: Sequelize.INTEGER
    },
    priority_dir: {
      type: Sequelize.INTEGER
    },
    redirect_page_id: {
      type: Sequelize.INTEGER
    },
    is_rkk_committee: {
      type: Sequelize.INTEGER
    },
    created_by: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_by: {
      type: Sequelize.INTEGER
    },
    updated_at: {
      type: Sequelize.DATE
    }},
    {
      freezeTableName: true,
      timestamps: true,
      underscored: true
    }
  );