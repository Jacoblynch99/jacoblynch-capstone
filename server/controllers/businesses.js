const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
require('dotenv').config()

const getAllBusinesses = (req, res) => {
    pool.query(
        'SELECT business_name, business_address, phone, email, zipcode, city,state, proffesions.proffesion FROM businesses INNER JOIN proffesions ON businesses.proffesion_id = proffesions.proffesion_id',
        (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows)
        }
    )
}

module.exports = {
    getAllBusinesses,
}
