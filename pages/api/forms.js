import { ServerClient } from 'postmark'

export default async function (req, res) {
  const serverToken = process.env.POSTMARK_API_TOKEN;
  const client = new ServerClient(serverToken);
  return new Promise(resolve => {
    client.sendEmail({
      "From": process.env.POSTMARK_EMAIL,
      "To": process.env.POSTMARK_EMAIL,
      "ReplyTo": req.body.email,
      "TextBody": "Hello dear Postmark user.",  
      }).then(function(res) {
        if(res.ErrorCode === 0){
          // Add backend action for successful form submission or remove
          console.log('API Response:', res)
        }
        else {
          // Add backend action for unsuccessful form submission or remove
          console.log('API Response Error:', res)
        }
    }, function(err) {
        // Do something with error response or remove
        console.error('API Error:', err)
    });
    res.end();
    return resolve()
  })
}

