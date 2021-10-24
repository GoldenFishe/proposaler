import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proposal } from './proposal.enity';
import { CreateDto } from './dto/create.dto';

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
    return this.proposalRepository.findOne({ id });
  }

  async create(createDto: CreateDto) {
    const proposal = this.proposalRepository.create(createDto);
    const { id } = await this.proposalRepository.save(proposal);
    return this.getById(id);
  }
}
