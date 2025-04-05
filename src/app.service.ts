import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  example(): string {
    return 'Rota criada por mim!';
  }
}
