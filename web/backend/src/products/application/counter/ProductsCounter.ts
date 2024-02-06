import { type ProductRepository } from '../../domain/ProductRepository';

export class ProductsCounter {
  constructor (private readonly productRepository: ProductRepository) {
  }

  async count (): Promise<number> {
    return await this.productRepository.count();
  }
}
