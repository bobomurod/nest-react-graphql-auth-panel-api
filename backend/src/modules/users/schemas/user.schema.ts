import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export type UserDocument = User & Document;

@Schema({ collection: 'users', _id: true, timestamps: true })
export class UserCollection extends Document{
  _id: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  login: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, unique: true, required: true })
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(UserCollection);
