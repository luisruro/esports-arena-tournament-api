import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';
import { PlayersModule } from 'src/players/players.module';
import { TournamentsModule } from 'src/tournaments/tournaments.module';

@Module({
  providers: [ResultsService],
  controllers: [ResultsController],
  imports: [TypeOrmModule.forFeature([Result, Player, Tournament]), PlayersModule, TournamentsModule]
})
export class ResultsModule {}
