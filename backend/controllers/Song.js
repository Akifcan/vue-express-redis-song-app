const client = require('../utils/database')

const uuidv4 = require('uuid/v4');
exports.song_add = (req, res) => {
	const id = uuidv4()
	client.hmset(id, [
		'author', req.body.author,
		'songName', req.body.songName,
		'iframe', req.body.iframe
	], function(err, reply){
		if(err) res.send(err)
		res.json({message: reply, id: id})
	})
}

exports.song_detail = (req, res) => {
	const id = req.params.id
	client.hgetall(id, function(err, reply){
		if(err) console.log(reply)
		res.json({data: reply})
	})
}

exports.song_is_exists = (req, res) => {
	const id = req.params.id
	client.exists(id, function(err, reply){
		res.json({message: reply})
	})
}

exports.song_delete = (req, res) => {
	const id = req.params.id
	client.del(id, function(err, reply){
		if(err) console.log(err)
		res.json({message: reply})
	})
}