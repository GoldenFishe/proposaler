import { Module } from '@nestjs/common';
import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposal } from './entities/proposal.enity';
import { ProposalLike } from './entities/proposalLike.entity';
import { ProposalDislike } from './entities/proposalDislike.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proposal, ProposalLike, ProposalDislike]),
  ],
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule {}
