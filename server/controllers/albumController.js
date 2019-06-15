module.exports = {
	getAlbum: (req, res) => {
			const db = req.app.get('db');
			db.read_album()
			.then( album => res.json(album) )
			.catch( () => res.status(500).send() );
	}
}