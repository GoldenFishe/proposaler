import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const STATIC_PATH = join(__dirname, "..", "static");
const AVATARS_PATH = join(STATIC_PATH, "avatars");
const PROPOSALS_PATH = join(STATIC_PATH, "proposals");
const COMMENTS_PATH = join(STATIC_PATH, "comments");

export function createStaticFolders() {
  const isExistsStaticFolder = existsSync(STATIC_PATH);
  const isExistsAvatarsFolder = existsSync(AVATARS_PATH);
  const isExistsProposalsFolder = existsSync(PROPOSALS_PATH);
  const isExistsCommentsFolder = existsSync(COMMENTS_PATH);

  if (!isExistsStaticFolder) mkdirSync(STATIC_PATH);
  if (!isExistsAvatarsFolder) mkdirSync(AVATARS_PATH);
  if (!isExistsProposalsFolder) mkdirSync(PROPOSALS_PATH);
  if (!isExistsCommentsFolder) mkdirSync(COMMENTS_PATH);
}
