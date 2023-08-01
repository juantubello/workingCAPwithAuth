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
                let QRimage = JSON.stringify(data)
                let asciiSecret = secret.ascii
                const response = {
                    "image": QRimage,
                    "secret": asciiSecret
                }
                resolve(response)
            })
        });
    },
    verifyToken(validToken) {
        return new Promise(async (resolve, reject) => {
            console.log(validToken)
            const verified = speakeasy.totp.verify({
                secret: 'l>5KVcB%48N.Fr(ZvyN62$Nz5U2vg2}M',
                encoding: 'ascii',
                token: validToken
            })
            console.log(verified)
            resolve(verified)
        });
    }
}