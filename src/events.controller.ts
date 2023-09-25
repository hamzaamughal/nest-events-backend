import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('events') // specify a base route for this controller
export class EventsController {
  @Get()
  findAll(): string {
    return 'This action returns all events';
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns one event';
  }

  @Post()
  create(): string {
    return 'This action creates a new event';
  }

  @Patch(':id')
  update(): string {
    return 'This action updates an event';
  }

  @Delete(':id')
  delete(): string {
    return 'This action deletes an event';
  }
}
