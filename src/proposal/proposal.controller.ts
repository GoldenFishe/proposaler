import { Controller, Get, Param } from '@nestjs/common';

import { ProposalService } from './proposal.service';

@Controller('proposal')
export class ProposalController {
  constructor(private proposalService: ProposalService) {}
  @Get()
  getAll() {
    return this.proposalService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.proposalService.getById(id);
  }
}
