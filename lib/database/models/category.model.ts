<<<<<<< HEAD
import { Document, model, models, Schema } from "mongoose";
=======
import { Document, model, models } from "mongoose";
import { Schema } from "mongoose";
>>>>>>> 58d124bac1e88d209e0106ed4ebc39a0e9acf59c

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);
export default Category;
