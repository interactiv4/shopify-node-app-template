import { type DomainEvent } from './events/domainEvent';

export abstract class AggregateRoot {
  private domainEvents: DomainEvent[];

  constructor () {
    this.domainEvents = [];
  }

  pullDomainEvents (): DomainEvent[] {
    const domainEvents = this.domainEvents.slice();
    this.domainEvents = [];

    return domainEvents;
  }

  record (event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  toArray (): any[] {
    return Object.keys(this).map(key => {
      console.log(key);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return this[key];
    });
  }
}
