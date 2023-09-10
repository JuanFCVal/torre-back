import { Controller, Post, Body, Param, Get, Ip } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto, @Ip() ip: string) {
    createHistoryDto.ip = ip;
    return this.historyService.create(createHistoryDto);
  }
  @Get(':limit')
  getHistory(@Param('limit') limit: number, @Ip() ip: string) {
    return this.historyService.getHistory(limit, ip);
  }
}
