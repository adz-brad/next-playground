import { ServerClient } from 'postmark'

export default async function (req) {
  const serverToken = process.env.POSTMARK_API_TOKEN;
  const client = new ServerClient(serverToken);
  const submit = await client.sendEmail({
    "From": process.env.POSTMARK_EMAIL,
    "To": process.env.POSTMARK_EMAIL,
    "ReplyTo": req.body.email,
    "TextBody": "Hello dear Postmark user.",  
  }).then(function(res) {
    return res
  }, function(err) {
    return err
  })
    return submit
}


