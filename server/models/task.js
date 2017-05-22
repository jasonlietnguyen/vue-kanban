import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	// Relations
	boardId: { type: ObjectId, ref: models.board, required: true },
  listId: { type: ObjectId, ref: models.list,  required: true}
});

module.exports = mongoose.model(models.task.name, schema);