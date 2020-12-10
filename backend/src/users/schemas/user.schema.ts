import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export class User {
  @Prop()
  username: string;

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
