import { type Router } from 'express';
import { glob } from 'glob';

export function registerRoutes (router: Router): void {
  const routes = glob.sync(`${process.cwd()}/**/*.route.*`);
  // eslint-disable-next-line array-callback-return
  routes.map(route => { register(route, router); });
}

function register (routePath: string, router: Router): void {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const { register } = require(routePath) as { register: (router: Router) => void };
  register(router);
}
