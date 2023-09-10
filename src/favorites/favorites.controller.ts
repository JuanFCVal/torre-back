import { Body, Controller, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDTO } from './dto/create-favorite.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}
  @Post()
  create(@Body() createHistoryDto: CreateFavoriteDTO) {
    return this.favoritesService.create(createHistoryDto);
  }
}
