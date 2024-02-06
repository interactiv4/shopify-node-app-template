export interface ProductRepository {
  count: () => Promise<number>
}
