import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HistoryModule } from './history/history.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/torre-front'),
    UserModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
