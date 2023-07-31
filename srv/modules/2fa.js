const speakeasy = require('speakeasy')
const qrcode = require('qrcode')


module.exports = {

    generate2FACode() {
        return new Promise(async (resolve, reject) => {
            let secret = speakeasy.generateSecret({
                name: "test@test"
            })

            // return "test"
            qrcode.toDataURL(secret.otpauth_url, function (err, data) {
                console.log(JSON.stringify(data))
                resolve(JSON.stringify(data))
            })
        });
    }
}