const controller = {};

controller.list = (req, res) =>{

	req.getConnection((err, conn) =>{
		conn.query('SELECT * FROM actividades', (err, tarea) =>{
			if (err) {
				res.json(err);
			}

			res.render('tarea', {
				data: tarea
			});
		});
	});
	
};

controller.guardar = (req, res) =>{
	const data = req.body;
	const status= 'En proceso';
	
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO actividades set Actividad=?, Estado=?', [data.actividad, status], (err, tareas) => {
			console.log(err);
			res.redirect('/');
		});
	});
};

controller.borrar = (req, res) => {
	const { id }= req.params;
	req.getConnection((err, conn) =>{
		conn.query('DELETE FROM actividades WHERE id=?', [id], (err, rows) =>{
			res.redirect('/');
		});
	})

};

controller.actualizar = (req, res) =>{

	const { id }= req.params;
	const checked = 'Terminada';
	req.getConnection((err, conn) =>{
		conn.query('UPDATE actividades Set Estado=? WHERE id=?', [checked, id], (err, rows) =>{
			res.redirect('/');
		});
	});
};


module.exports = controller;