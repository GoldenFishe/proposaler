import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Octokit } from 'octokit';

import { CreateDto } from './dto/create.dto';
import { Project } from './entities/project.entity';
import { UserService } from '../user/user.service';
import { Proposal } from '../proposal/entities/proposal.enity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private userService: UserService,
  ) {}

  async create(createDto: CreateDto, authorId: number) {
    const owner = await this.userService.getById(authorId);
    if (owner) {
      const collaboratorsPromises = createDto.collaborators.map((id) => {
        return this.userService.getById(id);
      });
      const collaborators = await Promise.all(collaboratorsPromises);
      const octokit = new Octokit({ auth: owner.githubToken });
      const createRepo = await octokit.rest.repos.createForAuthenticatedUser({
        ...createDto,
      });
      const invitesPromises = collaborators.map((collaborator) => {
        octokit.rest.repos.addCollaborator({
          owner: owner.githubLogin,
          repo: createDto.name,
          username: collaborator.githubLogin,
        });
      });
      await Promise.all(invitesPromises);
      const projectEntity = this.projectRepository.create({
        name: createDto.name,
        description: createDto.description,
        githubRepositoryId: createRepo.data.id,
        ownerId: authorId,
        proposalId: Number(createDto.proposalId),
        collaborators,
      });
      return this.projectRepository.save(projectEntity);
    } else {
      throw new Error("Doesn't have token");
    }
  }

  async getByProposalId(proposalId: Proposal['id']) {
    return this.projectRepository.find({ proposalId });
  }
}
