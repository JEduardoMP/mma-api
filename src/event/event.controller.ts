import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Post()
  async create(@Body() eventData: Partial<Event>): Promise<Event> {
    return this.eventService.create(eventData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() eventData: Partial<Event>,
  ): Promise<Event> {
    return this.eventService.update(id, eventData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.eventService.remove(id);
  }
}
