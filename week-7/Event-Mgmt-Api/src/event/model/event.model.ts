import {Schema, model} from "mongoose";

const EventSchema = new Schema({
    title: {type: String, required: true, trim: true},
    image: {type: String, default: ""},
    venue: {type: String, required: true, trim:},
    eventDate: {type: Date, required: true}
}, {
    timestamps: true
})

export const Event = model("Event", EventSchema)