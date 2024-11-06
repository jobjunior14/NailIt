import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'products' })
export class ProductSchemaMongoDb extends Document {
  @Prop({ required: [true, 'You must provide a product id'], unique: true })
  product_id: number;

  @Prop({ default: [], required: false })
  avantages: string[];

  @Prop({ default: '', required: false })
  detail: string;

  @Prop({ required: [true, 'You must provide at least one media'] })
  medias: [
    {
      type: string;
      path: string;
    },
  ];

  @Prop({ required: false })
  comments: [
    {
      user_name_id: { type: string };
      comment: string;
      media: {
        path: string;
        type: string;
      };
    },
  ];
}

export const ProductSchema = SchemaFactory.createForClass(ProductSchemaMongoDb);
