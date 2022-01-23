import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IBook from '../interfaces/book';

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        year: { type: Number, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IBook>('Book', BookSchema);
