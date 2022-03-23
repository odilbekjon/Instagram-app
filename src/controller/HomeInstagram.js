const GET = ( req, res ) => {
    // const { username } = req.params
    // const users = read('users.json')
    // const filteredUsers = users.filter(e => e.username == username)
    // console.log(filteredUsers);
    res.render('index')
}

module.exports = {
    GET
}