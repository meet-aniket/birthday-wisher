const nodeMailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodeMailer.createTransport(sendGridTransport({
  auth: {
    api_key: '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'
  }
}))

module.exports = { transporter }