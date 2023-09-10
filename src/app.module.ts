import { Module } from '@nestjs/common';
import { HistoryModule } from './history/history.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/torre-front'),
    FavoritesModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
