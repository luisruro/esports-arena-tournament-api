import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Module({
  providers: [PlayersService],
  controllers: [PlayersController],
  imports: [TypeOrmModule.forFeature([Player])]
})
export class PlayersModule {}
