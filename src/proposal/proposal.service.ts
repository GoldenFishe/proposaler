import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proposal } from './proposal.enity';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
  ) {}

  getAll() {
    return this.proposalRepository.find();
  }

  getById(id: number) {
    return this.proposalRepository.find({ id });
  }
}
