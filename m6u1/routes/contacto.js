var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('contacto', {
    isContacto: true
  }); //contacto.hbs
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'franmargomez59@gmail.com',
    subject: 'Contactó desde HardShopp (WEB)',
    html: nombre + apellido + " se contacto a traves y quiere mas info a este correo: " + email + " <br> Ademas, hizo el siguiente comentario: " + mensaje + ". <br> Su Num. de telefono es: " + telefono
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })

  var info = await transporter.sendMail(obj);

  res.render('contacto', {
    isContacto: true,
    message: 'Mensaje enviado correctamente'
  });
});
module.exports = router;
