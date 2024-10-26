import { Module } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { TournamentsController } from './tournaments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';

@Module({
  providers: [TournamentsService],
  controllers: [TournamentsController],
  imports: [TypeOrmModule.forFeature([Tournament])],
  exports: [TournamentsService]
})
export class TournamentsModule { }
