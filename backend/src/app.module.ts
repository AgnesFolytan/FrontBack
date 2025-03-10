import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoncertModule } from './koncert/koncert.module';

@Module({
  imports: [KoncertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
