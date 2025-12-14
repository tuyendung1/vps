var cors = require('cors');
let svgCaptcha = require('svg-captcha');
let svg2img    = require('svg2img');
let Create     = function(client, name){
	let captcha = svgCaptcha.create({background:'#99CC99', noise:0});
	svg2img(captcha.data, function(error, buffer) {
		client.captcha = captcha.text;
		console.log("client.captcha", client.captcha);
		let data = {};
		data['data'] = 'data:image/png;base64,' + buffer.toString('base64');
		data['name'] = name;
		client.red({captcha: data});
	});
}
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
