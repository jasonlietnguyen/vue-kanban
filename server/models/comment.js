import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	comment: { type: String },
	created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
	// Relations
	boardId: { type: ObjectId, ref: models.board, required: true },
	listId: { type: ObjectId, ref: models.list,  required: true},
	taskId: {type: ObjectId, ref: models.task, required: true}
});

module.exports = mongoose.model(models.comment.name, schema);