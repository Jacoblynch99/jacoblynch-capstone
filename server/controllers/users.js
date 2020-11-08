const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
require('dotenv').config()

const getAllBusinesses = (req, res) => {
    pool.query(
        'SELECT business_id, business_name, business_address, phone, email, zipcode, city,state, proffesions.proffesion FROM businesses INNER JOIN proffesions ON businesses.proffesion_id = proffesions.proffesion_id',
        (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows)
        }
    )
}

const getUserById = (req, res) => {
    let sql = 'SELECT * FROM users WHERE id = ?'
    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows)
    })
}

const createTicket = (req, res) => {
    const { userId, businessId, startDate } = req.body.postBody.tickets

    let sql =
        'INSERT INTO tickets (user_id, business_id, start_date) VALUES (?, ?, ?)'
    sql = mysql.format(sql, [userId, businessId, startDate])

    pool.query(sql, (err, results) => {
        if (err) return handleSQLError(res, err)
        return res.json({ newId: results.insertId })
    })
}

module.exports = {
    getAllBusinesses,
    getUserById,
    createTicket,
}
