const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const path = require('path')
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(__dirname + '/public'));

// app.get('/', () => {
//   resizeBy.send('welcome to my forma')
// })

app.post('/api/forma', (req, resopnse) => {

  let data = req.body
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'coursebarbers@gmail.com',
      pass: 'gozqfrmwgvoabsfr'
    }
  });


  let mailOptions = {
    from: data.email,
    to: 'coursebarbers@gmail.com',
    subject: `Message from ${data.fullName}`,

    html: `
    <h3>Information</h3>
    <ul>
    <li>Full-Name: ${data.fullName}</li>
    <li>Phone: ${data.phone}</li>
    <li>Email: ${data.email}</li>
    </ul>
    
    <h3>Message</h3>
    <p>${data.message}</p>`
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (err, res) {
    
    console.log(mailOptions);
    console.log(mailOptions.from);

    if (res) {
      console.log(res, 'res');
      console.log('-----------------------------------------------------');
      resopnse.json({
        message: res,
        status: 200
      })
    } else {
      console.log(err, 'Error');
    }
  })
  smtpTransport.close();

})

//deployment
if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
};

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})