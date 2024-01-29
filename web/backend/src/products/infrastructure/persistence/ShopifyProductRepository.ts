import { type ProductRepository } from '../../domain/ProductRepository';

export class ShopifyProductRepository implements ProductRepository {
  count (): number {
    return 200;
  }
}
