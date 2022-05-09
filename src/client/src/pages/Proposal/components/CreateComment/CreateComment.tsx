import React, { FC, FormEvent } from "react";

import Form from "../../../../components/Form/Form";
import Textarea from "../../../../components/Textarea/Textarea";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { CommentType } from "../../../../types/CommentType";

interface Props {
  replyTo?: CommentType["id"];
  onCreate: (newComment: FormData, replyTo?: CommentType["id"]) => void;
}

const CreateComment: FC<Props> = ({ onCreate, replyTo }) => {
  const create = (e: FormEvent) => {
    const newComment = new FormData((e.target) as HTMLFormElement);
    onCreate(newComment, replyTo);
  };
  return (
    <div>
      <Form onSubmit={create}>
        <Textarea label="Comment" name="comment" />
        {/*<Input label="Files" type="file" name="files" multiple id="files"/>*/}
        <Button type="submit">Create Comment</Button>
      </Form>
    </div>
  );
};

export default CreateComment;