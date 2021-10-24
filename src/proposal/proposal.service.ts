import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';

import { Proposal } from './proposal.enity';

@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(Proposal)
    private proposalRepository: Repository<Proposal>,
  ) {}

  getAll() {
    return createQueryBuilder('Proposal')
      .leftJoinAndSelect('Proposal.author', 'author')
      .getMany();
  }

  getById(id: number) {
    return createQueryBuilder('Proposal')
      .leftJoinAndSelect('Proposal.author', 'author')
      .where('Proposal.id = :id', { id })
      .getOne();
  }
}
