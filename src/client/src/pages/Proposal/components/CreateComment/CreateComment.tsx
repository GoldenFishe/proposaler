import React, { FC, FormEvent } from "react";

import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

interface Props {
  onCreate: (newComment: FormData) => void;
}

const CreateComment: FC<Props> = ({ onCreate }) => {
  const create = (e: FormEvent) => {
    e.preventDefault();
    const newComment = new FormData((e.target) as HTMLFormElement);
    onCreate(newComment);
  };
  return (
    <div>
      <form onSubmit={create}>
        <Input label="Comment" name="comment" />
        <Input label="Files" type="file" name="files" />
        <Button type="submit">Create Comment</Button>
      </form>
    </div>
  );
};

export default CreateComment;