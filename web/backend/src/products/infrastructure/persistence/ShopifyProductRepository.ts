import { type ProductRepository } from '../../domain/ProductRepository';
import shopify from '../../../../lib/shopify';
import { type Session } from '@shopify/shopify-api';
import { type PrismaSessionStorage } from '../../../user/infrastructure/storage/PrismaSessionStorage';

export class ShopifyProductRepository implements ProductRepository {
  constructor (private readonly sessionStorage: PrismaSessionStorage) {}

  async count (): Promise<number> {
    const session: Session | undefined = await this.sessionStorage.currentSession();
    if (undefined === session) {
      throw new Error('Session not found');
    }
    const countData: any = await shopify.api.rest.Product.count({
      session
    });

    return countData.count ?? 0;
  }
}
