const { Schema, model } = require("mongoose");

const GroupSchema = new Schema({
    admin: { type: Schema.ObjectId, ref: "User"},
    usuarios: [{ type: Schema.ObjectId, ref: "User"}],
    created_at: { type: String }

});

module.exports = model("Group", GroupSchema);