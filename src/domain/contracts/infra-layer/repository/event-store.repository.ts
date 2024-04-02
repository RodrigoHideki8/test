import { DomainEvent } from '../../../events/domain-event';
import { UniqueIdentifier } from '../../../entities/types';
import { Readable } from 'stream';

export abstract class EventStore<AggregateType> {
  abstract append(record: DomainEvent<AggregateType>): Promise<void>;
  abstract getVersion(aggregateId: UniqueIdentifier): Promise<number>;
  abstract replayTo(
    aggregateId: UniqueIdentifier,
  ): Promise<DomainEvent<AggregateType>[]>;
  abstract replayAll(aggregateId: UniqueIdentifier): Readable;
  abstract hasAny(
    aggregateId: UniqueIdentifier,
    streamName: string,
  ): Promise<boolean>;
  abstract getLastOccurrenceTo(
    aggregateId: UniqueIdentifier,
    streamName: string,
  ): Promise<DomainEvent<AggregateType>>;
}
