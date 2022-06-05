import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Octokit } from 'octokit';

import { CreateDto } from './dto/create.dto';
import { Project } from './entities/project.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private userService: UserService,
  ) {}

  async create(createDto: CreateDto, authorId: number) {
    const user = await this.userService.getById(authorId);
    if (user) {
      const octokit = new Octokit({ auth: user.githubToken });
      const createRepo = await octokit.rest.repos.createForAuthenticatedUser({
        ...createDto,
      });
      const projectEntity = this.projectRepository.create({
        githubRepositoryId: createRepo.data.id,
        ownerId: authorId,
        proposalId: Number(createDto.proposalId),
      });
      await this.projectRepository.save(projectEntity);
      const invites = createDto.collaborators.map(async (collaboratorId) => {
        return this.invite(authorId, createDto.name, collaboratorId);
      });
      return Promise.all(invites);
    } else {
      throw new Error("Doesn't have token");
    }
  }

  private async invite(authorId: number, repo: string, collaboratorId: number) {
    const owner = await this.userService.getById(authorId);
    const collaborator = await this.userService.getById(collaboratorId);
    if (owner.githubToken) {
      const octokit = new Octokit({ auth: owner.githubToken });
      await octokit.rest.repos.addCollaborator({
        owner: owner.githubLogin,
        repo,
        username: collaborator.username,
      });
    } else {
      throw new Error("Doesn't have token");
    }
  }
}
