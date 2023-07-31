const cds = require("@sap/cds");
const TWOFA = require('./modules/2fa');

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
    srv.on('READ', 'TwoFACode', async req => {
        const qr = await TWOFA.generate2FACode()
        console.log("va el qr")
        console.log(qr)
        // let qr = "abc"
        return { "image": qr }
    })
}