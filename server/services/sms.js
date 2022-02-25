const Vonage = require('@vonage/server-sdk')


// Vonage Initialization
const vonage = new Vonage({
  apiKey: '080ab076',
  apiSecret: '4mk1fBe2PNGnbwIF'
})


const from = "Aniket Kumar Pandey"
const to = "919340460719"
const text = "Happy BirthDay Dear Employee We are Aniket's team this is testing purpose message"

vonage.message.sendSms(from, to, text, (err, responseData) => {
  if(err) {
    console.err(err);
  } else {
    if(responseData) {
      console.log(responseData)
      console.log("Message sent successfully.");
    } else {
      console.log(responseData);
    }
  }
})
