
module.exports = function (app) {
	app.get('/', function (req , res , next ){
		return res.render('face_camera');
	});
}
