import { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
<<<<<<< HEAD
  price: string;
=======
  price?: string;
>>>>>>> 58d124bac1e88d209e0106ed4ebc39a0e9acf59c
  isFree: boolean;
  url: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  price: { type: String, required: true },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

<<<<<<< HEAD
const Events = models.Events || model("Events", EventSchema);
=======
const Events = models.Events || model("Event", EventSchema);
>>>>>>> 58d124bac1e88d209e0106ed4ebc39a0e9acf59c

export default Events;
