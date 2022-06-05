import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { Proposal } from './entities/proposal.enity';
import { ProposalLike } from './entities/proposalLike.entity';
import { ProposalDislike } from './entities/proposalDislike.entity';
import { ProposalFile } from './entities/proposalFile.entity';
import { Tags } from './entities/tags.entity';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Proposal,
      ProposalLike,
      ProposalDislike,
      ProposalFile,
      Tags,
    ]),
  ],
  controllers: [ProposalController],
  providers: [ProposalService, JwtStrategy],
})
export class ProposalModule {}
