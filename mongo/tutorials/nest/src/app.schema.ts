import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

declare global {
  type AppDocument = App & Document;
}

@Schema({ timestamps: true })
export class App {
  @Prop({ type: String })
  connectionId: string;
}

export const AppSchema = SchemaFactory.createForClass(App);
