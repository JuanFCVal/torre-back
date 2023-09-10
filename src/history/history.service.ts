import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel('History') private readonly historyModel: Model<History>,
  ) {}
  create(createHistoryDto: CreateHistoryDto) {
    const createdHistory = new this.historyModel(createHistoryDto);
    return createdHistory.save();
  }

  getHistory(limit: number, ip: string) {
    return this.historyModel
      .find({ ip })
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }
}
