import { PartialType } from "@nestjs/swagger";
import { CreateTorunamentDto } from "./create-tournament.dto";

export class UpdateTournamentDto extends PartialType(CreateTorunamentDto) { }