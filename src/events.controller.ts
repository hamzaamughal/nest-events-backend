import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { Event } from './event.entity';
import { UpdateEventDto } from './update-event.dto';

@Controller('events') // specify a base route for this controller
export class EventsController {
  private events: Event[] = [];
  @Get()
  findAll(): string {
    return this.events.toString();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    const event = this.events.find((event) => event.id === Number(id));
    return event.toString();
  }

  @Post()
  create(@Body() input: CreateEventDto): string {
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    };
    this.events.push(event);
    return event.toString();
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    const index = this.events.findIndex((event) => event.id === Number(id));
    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };
    return this.events[index].toString();
  }

  @Delete(':id')
  remove(@Param('id') id) {
    this.events = this.events.filter((event) => event.id !== Number(id));
    return true;
  }
}
