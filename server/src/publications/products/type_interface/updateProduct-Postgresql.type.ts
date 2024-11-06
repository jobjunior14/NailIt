export type UpdateProductPostgreSqlType = {
  id: number;

  title: String;

  created_at: Date;

  updated_at?: Date;

  price: number;

  discount: number;

  quantity: number;

  views?: number;
};
