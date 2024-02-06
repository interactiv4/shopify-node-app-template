import { type Router } from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import shopify from '../../lib/shopify';
import serveStatic from 'serve-static';

export const register = (router: Router): void => {
  const STATIC_PATH =
    process.env.NODE_ENV === 'production'
      ? `${process.cwd()}/../frontend/dist`
      : `${process.cwd()}/../frontend/`;

  router.use(serveStatic(STATIC_PATH, { index: false }));

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.use('/*', shopify.ensureInstalledOnShop(), async (
    _req,
    res,
    _next
  ) => {
    return res
      .status(200)
      .set('Content-Type', 'text/html')
      .send(readFileSync(join(STATIC_PATH, 'index.html')));
  });
};
