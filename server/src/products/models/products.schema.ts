import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductSchemaMongoDb extends Document {
  @Prop({ required: [true, 'You must provide a product id'], unique: true })
  product_id: number;

  @Prop({ default: [] })
  avantages: string[];

  @Prop({ default: '' })
  detail: string;

  @Prop({ required: [true, 'You must provide at least one media'] })
  medias: [
    {
      type: string;
      path: string;
    },
  ];

  @Prop()
  comments: [
    {
      user_id: { type: string; ref: 'UserEntity' }; // Reference to the User model
      comment: string;
      media: {
        path: string;
        type: string;
      };
    },
  ];
}

export const ProductSchema = SchemaFactory.createForClass(ProductSchemaMongoDb);
