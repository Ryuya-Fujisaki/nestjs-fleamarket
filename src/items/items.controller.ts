import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id') // /items/test1
  findById(@Param('id', ParseUUIDPipe) id: string): Item | undefined {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }
  @Put(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.delete(id);
  }
}
