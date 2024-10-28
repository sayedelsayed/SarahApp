const nodemailer = require("nodemailer");

module.exports.sendemail=async(options)=>{
    
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: "sayedelsayed777@gmail.com",
      pass: "ebbf pbcz sifn yyxt",
    },
  });
//"am88899910@gmail.com"
  const info = await transporter.sendMail({
    from: '"sayed" <sayedelsayed777@gmail.com>', // sender address
    to:options.email , // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<div>
    <a href="http://localhost:3000/user/emailverify/${options.token}">Go to Example Website</a>
    ${options.message}
    </div>`, // html body

  });
console.log(info,options.message)
}