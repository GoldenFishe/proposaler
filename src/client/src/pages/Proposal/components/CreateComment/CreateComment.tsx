import React, { FormEvent, useContext } from "react";

import { CommentsContext } from "../../context";
import Form from "../../../../components/Form/Form";
import Textarea from "../../../../components/Textarea/Textarea";
import Button from "../../../../components/Button/Button";
import FileUploader from "../../../../components/Input/FileUploader";

const CreateComment = () => {
  const { createComment, selectedCommentIdToReply, selectCommentIdToReply } = useContext(CommentsContext);
  const create = (e: FormEvent) => {
    const newComment = new FormData((e.target) as HTMLFormElement);
    createComment(newComment, selectedCommentIdToReply!);
    selectCommentIdToReply(null);
  };
  return (
    <Form onSubmit={create}>
      <Textarea label="Comment" name="comment" />
      <FileUploader label="Files" id="files" name="files" />
      <Button type="submit">Create Comment</Button>
    </Form>
  );
};

export default CreateComment;