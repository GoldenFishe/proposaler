import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDto {
  @IsArray()
  collaborators: number[];

  @IsNumber()
  proposalId: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  homepage: string;

  @IsOptional()
  @IsBoolean()
  has_issues: boolean;

  @IsOptional()
  @IsBoolean()
  has_projects: boolean;

  @IsOptional()
  @IsBoolean()
  has_wiki: boolean;

  @IsOptional()
  @IsBoolean()
  auto_init: boolean;

  @IsOptional()
  @IsString()
  gitignore_template: string;

  @IsOptional()
  @IsString()
  license_template: string;

  @IsOptional()
  @IsBoolean()
  allow_squash_merge: boolean;

  @IsOptional()
  @IsBoolean()
  allow_merge_commit: boolean;

  @IsOptional()
  @IsBoolean()
  allow_rebase_merge: boolean;

  @IsOptional()
  @IsBoolean()
  allow_auto_merge: boolean;

  @IsOptional()
  @IsBoolean()
  delete_branch_on_merge: boolean;

  @IsOptional()
  @IsBoolean()
  has_downloads: boolean;
}
