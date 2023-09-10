import { Injectable } from '@nestjs/common';
import { CreateFavoriteDTO } from './dto/create-favorite.dto';

@Injectable()
export class FavoritesService {
  create(createHistoryDto: CreateFavoriteDTO) {
    return 'This action adds a new favorite';
  }
}
