import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { Proposal } from './entities/proposal.enity';
import { ProposalLike } from './entities/proposalLike.entity';
import { ProposalDislike } from './entities/proposalDislike.entity';
import { ProposalFile } from './entities/proposalFile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Proposal,
      ProposalLike,
      ProposalDislike,
      ProposalFile,
    ]),
  ],
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule {}
