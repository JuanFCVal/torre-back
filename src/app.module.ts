import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [UserModule, HistoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
