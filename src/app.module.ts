import { Module } from '@nestjs/common';
import { HistoryModule } from './history/history.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [HistoryModule, FavoritesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
