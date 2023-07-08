const cds = require("@sap/cds");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");
const cors = require('cors');

cds.on("bootstrap", app => {
    app.use(cors());
    app.use(proxy({ path: "v2"}));
})

module.exports = cds.server;