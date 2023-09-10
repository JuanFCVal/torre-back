import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFavoriteDTO } from './dto/create-favorite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Favorite } from './entities/favorite.entity';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel('Favorite') private readonly favoriteModel: Model<Favorite>,
  ) {}

  getAllFavoritesById(userIp: string) {
    return this.favoriteModel.find({ ip: userIp });
  }
  getFavoriteById(userIp: string, id: number) {
    return this.favoriteModel.findOne({
      ip: userIp,
      ardaId: id,
    });
  }
  async create(createFavoriteDTO: CreateFavoriteDTO) {
    const favorite = await this.getFavoriteById(
      createFavoriteDTO.ip,
      createFavoriteDTO.ardaId,
    );

    if (favorite)
      throw new BadRequestException('Favorite already exists for this user');
    const createdFavorite = new this.favoriteModel(createFavoriteDTO);
    return createdFavorite.save();
  }

  delete({ id, ip }: { id: number; ip: string }) {
    return this.favoriteModel.deleteOne({
      ip,
      ardaId: id,
    });
  }
}
