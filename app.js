const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');

const app = express();

const tareasRoutes = require('./routes/tareas');

const myConnection = require('express-myconnection');


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host: 'mysql-lista-tareas.alwaysdata.net',
	user:'239526_requena',
	password:'paradox18_',
	port: 3306,
	database: 'lista-tareas_requena'
}));
app.use(express.urlencoded({extended: false}));

app.use('/', tareasRoutes);
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () =>{
	console.log("El servidor se está ejecutando en el puerto 3000");
});