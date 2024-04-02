import { UniqueIdentifier } from '../entities/types';
import { DeepPartial } from '../types/types';
import { DateUtils } from '../utils/date.utils';

export abstract class DomainEvent<
  Aggregate extends Record<string, any> = Record<string, any>,
> {
  id?: Required<Readonly<UniqueIdentifier>>;
  type: Required<Readonly<string>>;
  timestamp: Required<Readonly<Date>>;
  version: Readonly<number>;
  aggregateId: Required<Readonly<UniqueIdentifier>>;
  payload: Readonly<DeepPartial<Aggregate>>;
  streamName: Required<Readonly<string>>;

  protected constructor(
    type: string,
    aggregateId: UniqueIdentifier,
    data: DeepPartial<Aggregate>,
    streamName: string,
  ) {
    this.aggregateId = aggregateId;
    this.timestamp = DateUtils.getCurrentDateWithTimeZone();
    this.version = Number(1);
    this.payload = data;
    this.type = type;
    this.streamName = streamName;
  }
}
