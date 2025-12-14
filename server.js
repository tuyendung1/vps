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
