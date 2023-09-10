import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Favorite, FavoriteSchema } from './entities/favorite.entity';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Favorite.name,
        schema: FavoriteSchema,
      },
    ]),
  ],
})
export class FavoritesModule {}
