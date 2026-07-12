import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ReadinessService } from './readiness.service';

@Controller('app')
export class HealthController {
  constructor(private readonly readinessService: ReadinessService) {}
  @Get('/health')
  healthCheck(): string {
    return 'OK';
  }

  @Get('/ready')
  readyCheck(): string {
    if (this.readinessService.isReady()) {
      return 'Success';
    } else {
      throw new HttpException('Not ready', HttpStatus.SERVICE_UNAVAILABLE);
    }
  }
}
