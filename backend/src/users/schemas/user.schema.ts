import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = UserSchema & Document

export class UserSchema {
  @Prop()
  username: string;

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;
}
