const cds = require("@sap/cds");

function getUserRoles(req) {
    return {
        admin: req.user.is('admin'),
        viewer: req.user.is('viewer')
    }
}

module.exports = (srv) => {
    srv.on('READ', 'requests', async req => {
        return { id: 1234, email: "test@test", date: "06/07/2023" }
    })
    srv.on('READ', 'Roles', async req => {
        const roles = getUserRoles(req)
        return roles
    })
}