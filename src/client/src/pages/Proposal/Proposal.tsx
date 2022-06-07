import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { CommentsContext } from "./context";
import Card from "./components/Card/Card";
import Comment from "./components/Comment/Comment";
import CreateComment from "./components/CreateComment/CreateComment";
import { toTree } from "../../utils/utils";
import { ProposalModel } from "../../models/ProposalModel";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.css";
import Button from "../../components/Button/Button";
import CreateProject from "./components/CreateProject/CreateProject";
import { ProjectsModel } from "../../models/ProjectsModel";
import { NewProject } from "./types";
import { MessagesRequests } from "../../api/messages";

interface Props {
  proposalModel: ProposalModel;
  projectsModel: ProjectsModel;
}

const Proposal: FC<Props> = ({ proposalModel, projectsModel }) => {
  const { id } = useParams();
  const [selectedCommentIdToReply, setSelectedCommentIdToReply] = useState<CommentType["id"] | null>(null);
  const [visibleCreateCommentForm, setVisibleCreateCommentForm] = useState(false);
  const [visibleCreateProjectForm, setVisibleCreateProjectForm] = useState(false);

  const comments = toTree(proposalModel.comments, { parent: "id", child: "replyTo" });

  function selectCommentIdToReply(id: CommentType["id"] | null) {
    setSelectedCommentIdToReply(id);
    setVisibleCreateCommentForm(id !== null);
  }

  function like(id: CommentType["id"]) {
    proposalModel.likeComment(id);
  }

  function dislike(id: CommentType["id"]) {
    proposalModel.dislikeComment(id);
  }

  function createComment(newComment: FormData) {
    if (selectedCommentIdToReply !== undefined) {
      newComment.set("replyTo", String(selectedCommentIdToReply));
    }
    newComment.set("proposalId", String(id));
    proposalModel.createComment(newComment);
    selectCommentIdToReply(null);
    setVisibleCreateCommentForm(false);
  }

  function cancelCreateComment() {
    selectCommentIdToReply(null);
    setVisibleCreateCommentForm(false);
  }

  function createProject(project: Omit<NewProject, "proposalId">) {
    projectsModel.createProject({ ...project, proposalId: Number(id) });
    setVisibleCreateProjectForm(false);
  }

  function cancelCreateProject() {
    setVisibleCreateProjectForm(false);
  }

  useEffect(() => {
    if (id) {
      proposalModel.getProposal(Number(id));
      proposalModel.getComments(Number(id));
      projectsModel.getByProposalId(Number(id));
    }
  }, [id, projectsModel, proposalModel]);

  return (
    <div className={styles.wrapper}>
      {proposalModel.id && <Card {...proposalModel}
                                 onLike={() => proposalModel.like(proposalModel.id)}
                                 onDislike={() => proposalModel.dislike(proposalModel.id)} />}
      <div className={styles.comments}>
        <CommentsContext.Provider
          value={{ like, dislike, selectCommentIdToReply }}>
          {comments.map(comment => <Comment {...comment} key={comment.id} />)}
        </CommentsContext.Provider>
      </div>
      <div>
        <Button onClick={() => setVisibleCreateCommentForm(true)}>
          Add Comment
        </Button>
        <Button onClick={() => setVisibleCreateProjectForm(true)}>
          Create Project
        </Button>
      </div>
      <CreateProject visible={visibleCreateProjectForm}
                     onCreate={createProject}
                     onCancel={cancelCreateProject} />
      <CreateComment visible={visibleCreateCommentForm}
                     onCreate={createComment}
                     onCancel={cancelCreateComment} />
    </div>
  );
};

export default observer(Proposal);