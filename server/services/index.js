const nodeCron = require("node-cron");
const { transporter } = require("./email")

const Job = nodeCron.schedule("* * * * * *", () => {
  console.log(new Date().toLocaleString());
  transporter.sendMail({
    to: 'poornimagautam8058@gmail.com',
    from: 'aniketkumarpandey420@gmail.com',
    subject: 'SignUp succeded!',
    html: '<h1> Happy BirthDay! </h1>'
  }).then(() => console.log("Succeeded")).catch((err => {
    console.log(err);
  }))
}, {
  scheduled: false,
  timezone: "Asia/Kolkata"
})

module.exports = { Job };