import {
  Body,
  Controller,
  Delete,
  Get,
  Ip,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDTO } from './dto/create-favorite.dto';

@Controller('favorite')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}
  @Post()
  create(@Body() createFavoriteDTO: CreateFavoriteDTO, @Ip() ip) {
    createFavoriteDTO.ip = ip;
    return this.favoritesService.create(createFavoriteDTO);
  }
  @Get()
  getAll(@Ip() ip) {
    return this.favoritesService.getAllFavoritesById(ip);
  }

  @Delete(':id')
  delete(@Param('id') id: number, @Ip() ip: string) {
    return this.favoritesService.delete({ id, ip });
  }
}
