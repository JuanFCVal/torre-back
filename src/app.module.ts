import { Module } from '@nestjs/common';
import { HistoryModule } from './history/history.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesModule } from './favorites/favorites.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [EnvConfiguration] }),
    MongooseModule.forRoot(process.env.MONGODB),
    FavoritesModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
