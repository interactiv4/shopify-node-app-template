import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
loader.load(`${process.cwd()}/app/dependency-injection/services.yml`);

export default container;
