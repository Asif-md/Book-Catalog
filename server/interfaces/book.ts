import { Document } from 'mongoose';

export default interface IBook extends Document {
    title: string;
    year: number;
    description: string;
}
