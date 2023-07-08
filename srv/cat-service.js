const cds = require("@sap/cds");

module.exports = (srv) => {
    srv.on('READ', 'requests', async req => {
        console.log("Atributos de usuario")
        console.log(req.user.attr)
        console.log("Chequear permisos viewer")
        console.log(req.user.is('viewer'))
        console.log("Chequear permisos admin")
        console.log(req.user.is('admin'))
        let myRoles = req._.user.roles ; 
        console.log(myRoles)
        return {id:1234,email:"test@test", date:"06/07/2023"}
    })
}