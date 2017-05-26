import { models } from '../config/constants'
import Comments from './comment'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
	// Relations
	boardId: { type: ObjectId, ref: models.board.name, required: true },
  listId: { type: ObjectId, ref: models.list.name,  required: true},
	comments: [{ type: ObjectId, ref: models.comment.name}]
});

schema.pre('remove', function (next){
  Comments.find({boardId: this._id}).remove().exec(next)
})

module.exports = mongoose.model(models.task.name, schema);