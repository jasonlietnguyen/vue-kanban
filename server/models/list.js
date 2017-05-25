import { models } from '../config/constants'
import Tasks from '/task'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	creatorId: {type: ObjectId, ref: models.user.name, required: true},
	// Relations
	boardId: { type: ObjectId, ref: models.board.name, required: true },
	tasks: [{ type: ObjectId, ref: models.task.name}]

});

schema.pre('remove', function (next){
  Tasks.find({boardId: this._id}).remove().exec(next)
})

module.exports = mongoose.model(models.list.name, schema);