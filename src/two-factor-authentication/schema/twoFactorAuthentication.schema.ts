import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TwoFactorDocument = TwoFactor & Document;

@Schema()
export class TwoFactor {

  @Prop()
  userId: string;

  @Prop()
  safeEmail: string;

  @Prop()
  safePhone: string;

  @Prop()
  data: string;

  @Prop()
  code: string;

  @Prop(raw({
    createdAt: { type: Date, default: Date.now },
  }))
  createdAt: Date;
}

export const TwoFactorSchema = SchemaFactory.createForClass(TwoFactor);