import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductSchemaMongoDb extends Document {
  @Prop({ required: [true, 'You must provide a product id'], unique: true })
  product_id: number;

  @Prop(() => [String])
  avantages: string[];

  @Prop()
  detail: string;

  @Prop({ required: [true, 'You must provide at least one media'] })
  medias: [
    {
      type: String;
      url: string;
    },
  ];

  @Prop()
  comments: [
    {
      user_id: { type: String; ref: 'UserEntity' }; // Reference to the User model
      comment: string;
    },
  ];
}

export const ProductSchema = SchemaFactory.createForClass(ProductSchemaMongoDb);
