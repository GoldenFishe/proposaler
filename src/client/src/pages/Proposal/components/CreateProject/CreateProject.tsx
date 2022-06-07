import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { Modal } from "@carbon/react";

import Form from "../../../../components/Form/Form";
import Textarea from "../../../../components/Textarea/Textarea";
import Input from "../../../../components/Input/Input";
import SuggestInput, { Props as SuggestInputProps, Option } from "../../../../components/SuggestInput/SuggestInput";
import { UserRequests } from "../../../../api/user";
import { UserType } from "../../../../types/UserType";
import { NewProject } from "../../types";

interface Props {
  visible: boolean;
  onCreate: (project: Omit<NewProject, "proposalId">) => void;
  onCancel: () => void;
}

const CreateProject: FC<Props> = ({ visible, onCreate, onCancel }) => {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<UserType[]>([]);
  const [collaborators, setCollaborators] = useState<Option<UserType>[]>([]);

  const create = () => {
    const newComment = new FormData((formRef.current) as HTMLFormElement);
    const name = newComment.get("name") as string;
    const description = newComment.get("description") as string;
    onCreate({ name, description, collaborators: collaborators.map(c => c.value.id) });
    formRef.current?.reset();
  };

  const cancel = () => {
    formRef.current?.reset();
    onCancel();
  };

  const select: SuggestInputProps<UserType>["onSelect"] = (collaborator) => {
    setCollaborators(prevState => ([...prevState, collaborator]));
    setUsername("");
    setUsers([]);
  };

  const removeCollaborator: SuggestInputProps<UserType>["onUnselect"] = (collaborator) => {
    setCollaborators(prevState => {
      return prevState.filter(c => c.value.id !== collaborator.value.id);
    });
  };

  useEffect(() => {
    if (username) {
      UserRequests.findByUsername(username).then(users => {
        if (users) setUsers(users);
      });
    } else {
      setUsers([]);
    }
  }, [username]);

  const options = users.map(user => ({ label: user.username, value: user }));

  return (
    <Modal open={visible}
           size="sm"
           modalHeading="Project"
           onRequestClose={cancel}
           onRequestSubmit={create}
           primaryButtonText="Create Project">
      <Form ref={formRef}>
        <Input label="Project Name" id="project name" name="name" />
        <Textarea label="Description" name="description" />
        <SuggestInput options={options}
                      label="Collaborators"
                      id="collaborators"
                      value={username}
                      selectedOptions={collaborators}
                      onChange={setUsername}
                      onSelect={select}
                      onUnselect={removeCollaborator} />
      </Form>
    </Modal>
  );
};

export default CreateProject;