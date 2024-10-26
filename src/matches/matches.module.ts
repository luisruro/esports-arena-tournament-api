import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from 'src/players/players.module';
import { TournamentsModule } from 'src/tournaments/tournaments.module';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournaments/entities/tournament.entity';
import { TournamentPlayer } from './entities/tournament-player.entity';

@Module({
  providers: [MatchesService],
  controllers: [MatchesController],
  imports: [TypeOrmModule.forFeature([TournamentPlayer, Player, Tournament]), PlayersModule, TournamentsModule],
  exports: [MatchesService]
})
export class MatchesModule {}
