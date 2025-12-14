var cors = require('cors');
let svgCaptcha = require('svg-captcha');
let svg2img    = require('svg2img');
async function Create( name) {
	const captcha = svgCaptcha.create({background:'#99CC99', noise:0});
	const buffer = await new Promise((resolve, reject) => {
    svg2img(captcha.data, (err, buf) => {
      if (err) return reject(err);
      resolve(buf);
    });
  });
	
		captcha = captcha.text;
		console.log("client.captcha", captcha);
		let data = {};
		data['data'] = 'data:image/png;base64,' + buffer.toString('base64');
		data['name'] = name;
		console.log("client.captcha",data);
		//client.red({captcha: data});
}
Create("hQ");
let express       = require('express');
let app           = express();
//let server 	  	  = https.createServer(credentials, app);
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
let expressWs  = require('express-ws')(app);
app.use(express.static('public'));
let port       = process.env.PORT || 2002;
app.listen(port, function() {
    console.log("Server listen on port ", port);
});
