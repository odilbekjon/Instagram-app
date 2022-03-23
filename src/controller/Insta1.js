const {read} = require('../utils/fs')


const GET1 = (req,res) => {
    const { userName } = req.params
    const users = read('users.json')
    const findUsers = users.find(i => i)
    // const filterUsers = users.filter(e => e.userId == userName)
    res.render('insta1', { findUsers})
}

module.exports = {
    GET1
}