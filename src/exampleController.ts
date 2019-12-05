import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class ExampleController {
  @Get()
  async example() {
    return 'hello world';
  }

  @Get('/error')
  async exampleError() {
    throw new Error('Rest error');
  }
}