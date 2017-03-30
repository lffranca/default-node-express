const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// init app express
const app = express();

// set port
app.set('port', (process.env.PORT || 3000));

// ambiente
app.use(express.logger('dev'));

// init helmet
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Template
app.engine('html', ejs.renderFile);
app.set('views', './views');
app.set('view engine', 'ejs');

// init server
http.listen(app.get('port'),function() {
	console.log('Servidor Rodando! Porta: ' + app.get('port'));
});