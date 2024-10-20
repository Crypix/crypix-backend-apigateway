import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly AuthService: ClientProxy,
  ) {}

  async pingServiceA() {
    const pattern = { cmd: 'ping' };
    const payload = {};
    const result = await lastValueFrom(this.AuthService.send(pattern, payload));
    return result;
  }
}
