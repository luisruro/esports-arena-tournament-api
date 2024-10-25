import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './entities/match.entity';
import { PlayersModule } from 'src/players/players.module';
import { TournamentsModule } from 'src/tournaments/tournaments.module';

@Module({
  providers: [MatchesService],
  controllers: [MatchesController],
  imports: [TypeOrmModule.forFeature([Match]), PlayersModule, TournamentsModule]
})
export class MatchesModule {}
