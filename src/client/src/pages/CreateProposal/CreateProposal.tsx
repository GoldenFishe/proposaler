import React, { FC, FormEvent, useEffect } from "react";

import { ProposalsModel } from "../../models/ProposalsModel";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import TagInput from "./TagInput/TagInput";

import styles from "./style.module.scss";

interface Props {
  proposalsModel: ProposalsModel;
}

const CreateProposal: FC<Props> = ({ proposalsModel }) => {
  useEffect(() => {
    proposalsModel.getTags();
  }, [proposalsModel]);

  const create = (e: FormEvent) => {
    const newProposal = new FormData((e.target) as HTMLFormElement);
    proposalsModel.create(newProposal);
  };

  return (
    <div className={styles.createProposal}>
      <h1>Describe your idea</h1>
      <Form onSubmit={create}>
        <Input label="Title" id="Title" />
        <Textarea label="Description" name="description" />
        <Input type="file"
               label="Attachments"
               id="attachments"
               multiple
               name="files" />
        <TagInput tags={proposalsModel.tags} />
        <Button type="submit">Create Proposal</Button>
      </Form>
    </div>
  );
};

export default CreateProposal;