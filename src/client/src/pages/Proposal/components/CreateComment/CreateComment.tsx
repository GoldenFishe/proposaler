import React, { FC, FormEvent } from "react";

import Form from "../../../../components/Form/Form";
import Textarea from "../../../../components/Textarea/Textarea";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

interface Props {
  onCreate: (newComment: FormData) => void;
}

const CreateComment: FC<Props> = ({ onCreate }) => {
  const create = (e: FormEvent) => {
    const newComment = new FormData((e.target) as HTMLFormElement);
    onCreate(newComment);
  };
  return (
    <div>
      <Form onSubmit={create}>
        <Textarea label="Comment" name="comment" />
        <Input label="Files" type="file" name="files" />
        <Button type="submit" primary>Create Comment</Button>
      </Form>
    </div>
  );
};

export default CreateComment;