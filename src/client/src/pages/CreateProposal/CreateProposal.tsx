import React, { FC, FormEvent, useEffect, useState } from "react";
import { Add } from "@carbon/icons-react";

import { ProposalsModel } from "../../models/ProposalsModel";
import { TagType } from "../../types/ProposalType";
import { ProposalRequests } from "../../api/proposals";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import SuggestInput, { Option, Props as SuggestProps } from "../../components/SuggestInput/SuggestInput";
import styles from "./style.module.scss";

interface Props {
  proposalsModel: ProposalsModel;
}

const CreateProposal: FC<Props> = ({ proposalsModel }) => {
  const [tags, setTags] = useState<Array<Option<TagType>>>([]);
  const [tag, setTag] = useState<string>("");
  const [similarTags, setSimilarTags] = useState<TagType[]>([]);

  const create = (e: FormEvent) => {
    const newProposal = new FormData((e.target) as HTMLFormElement);
    tags.forEach(tag => newProposal.append("tags[]", tag.label));
    proposalsModel.create(newProposal);
  };

  const addTag = (id: number) => {
    if (tag) {
      setTags(prevTags => ([...prevTags, { label: tag, value: { id, label: tag } }]));
      setTag("");
    }
  };

  const removeTag: SuggestProps<TagType>["onUnselect"] = (tag) => {
    setTags(tags => {
      return tags.filter(t => t.value.id !== tag.value.id);
    });
  };

  const selectTag: SuggestProps<TagType>["onSelect"] = (option) => {
    setTags(prevTags => ([...prevTags, option]));
    setTag("");
    setSimilarTags([]);
  };

  useEffect(() => {
    if (tag) {
      ProposalRequests.getTags(tag).then(tags => tags && setSimilarTags(tags));
    } else {
      setSimilarTags([]);
    }
  }, [tag]);

  const options = similarTags.map(tag => ({ label: tag.label, value: tag }));

  return (
    <div className={styles.createProposal}>
      <h1>Describe your idea</h1>
      <Form onSubmit={create}>
        <Input label="Title"
               name="title"
               id="Title" />
        <Textarea label="Description"
                  name="description" />
        <div className={styles.inlineInput}>
          <SuggestInput type="text"
                        label="Tag"
                        id="tag"
                        options={options}
                        onChange={setTag}
                        selectedOptions={tags}
                        onUnselect={removeTag}
                        onSelect={selectTag}
                        value={tag} />
          <Button hasIconOnly
                  iconDescription="Add Tag"
                  className={styles.addTagButton}
                  size="md"
                  onClick={() => addTag(Math.random())}
                  renderIcon={Add} />
        </div>
        <Input type="file"
               label="Attachments"
               id="attachments"
               multiple
               name="files" />
        <Button type="submit">Create Proposal</Button>
      </Form>
    </div>
  );
};

export default CreateProposal;