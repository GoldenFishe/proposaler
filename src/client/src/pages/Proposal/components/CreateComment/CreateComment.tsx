import React, { FC, FormEvent, RefObject, useRef } from "react";
import { Modal } from "@carbon/react";

import Form from "../../../../components/Form/Form";
import Textarea from "../../../../components/Textarea/Textarea";
import FileUploader from "../../../../components/Input/FileUploader";
import form from "../../../../components/Form/Form";

interface Props {
  visible: boolean;
  onCreate: (newComment: FormData) => void;
  onCancel: () => void;
}

const CreateComment: FC<Props> = ({ visible, onCreate, onCancel }) => {
  const formRef = useRef() as RefObject<HTMLFormElement>;

  const create = () => {
    const newComment = new FormData((formRef.current) as HTMLFormElement);
    onCreate(newComment);
    formRef.current?.reset();
  };

  const cancel = () => {
    formRef.current?.reset();
    onCancel();
  };

  return (
    <Modal open={visible}
           size="sm"
           modalHeading="Comment"
           onRequestClose={cancel}
           onRequestSubmit={create}
           primaryButtonText="Create Comment">
      <Form ref={formRef}>
        <Textarea label="Comment" name="comment" />
        <FileUploader label="Files" id="files" name="files" multiple/>
      </Form>
    </Modal>
  );
};

export default CreateComment;