/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item | undefined {
    const found = this.items.find((item) => this.items.id === id);

    return this.items.find((item) => item.id === id);
  }

  create(createItemDto: CreateItemDto): Item {
    const item: Item | any = {
      id: uuid(),
      ...createItemDto,
      status: 'ON_SALE',
    };
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item | undefined {
    const item = this.findById(id);
    item!.status = 'SOLD_OUT';
    return item;
  }

  delete(id: string): Item | undefined | void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
