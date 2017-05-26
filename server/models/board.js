import { models } from '../config/constants'
import Lists from './list'
import Tasks from './task'
import Comments from './comment'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  collaborators: [{type: ObjectId, ref: models.user.name}],
  lists: [{type: ObjectId, ref: models.list.name}]
});

schema.pre('remove', function (next){
  Lists.find({boardId: this._id}).remove().exec(next)
  Tasks.find({boardId: this._id}).remove().exec(next)
  Comments.find({boardId: this._id}).remove().exec(next)

})



module.exports = mongoose.model(models.board.name, schema);