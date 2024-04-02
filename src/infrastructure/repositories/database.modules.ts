import { Module } from '@nestjs/common';
import { PostgresDatabaseModule } from '../../infrastructure/event-store/postgres.module';

@Module({
  imports: [PostgresDatabaseModule],
  exports: [PostgresDatabaseModule],
})
export class DatabaseModule {}
