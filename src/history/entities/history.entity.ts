import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class History extends Document {
  @Prop({ index: true })
  ip: string;
  @Prop()
  query: string;
}

export const HistorySchema = SchemaFactory.createForClass(History);
