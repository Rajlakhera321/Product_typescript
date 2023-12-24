import { Schema, model, Document } from "mongoose";

export interface ProductDocument extends Document {
    name: string;
    price: number;
}

interface Product {
    name: string;
    price: number;
}

const userSchema = new Schema<Product>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const userModel = model<Product>('products', userSchema);
export default userModel;