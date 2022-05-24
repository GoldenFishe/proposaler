import React, { FC, FormEvent, useState } from "react";
import { Add } from "@carbon/icons-react";

import { NewTagType } from "./types";
import { ProposalsModel } from "../../models/ProposalsModel";
import { TagType } from "../../types/ProposalType";
import { ProposalRequests } from "../../api/proposals";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import SuggestInput, { Props as SuggestProps } from "../../components/SuggestInput/SuggestInput";
import Tag from "../../components/Tag/Tag";
import styles from "./style.module.scss";

interface Props {
  proposalsModel: ProposalsModel;
}

const CreateProposal: FC<Props> = ({ proposalsModel }) => {
  const [tags, setTags] = useState<NewTagType[]>([]);
  const [tag, setTag] = useState<string>("");
  const [similarTags, setSimilarTags] = useState<TagType[]>([]);

  const create = (e: FormEvent) => {
    const newProposal = new FormData((e.target) as HTMLFormElement);
    tags.forEach(tag => newProposal.append("tags[]", tag.label));
    proposalsModel.create(newProposal);
  };

  const addTag = (id: number) => {
    if (tag) {
      setTags(prevTags => ([...prevTags, { id, label: tag }]));
      setTag("");
    }
  };

  const removeTag = (id: NewTagType["id"]) => {
    setTags(tags => {
      return tags.filter(tag => tag.id !== id);
    });
  };

  const selectTag: SuggestProps<TagType>["onSelect"] = (option) => {
    setTags(prevTags => ([...prevTags, option.value]));
    setTag("");
    setSimilarTags([]);
  };

  const inputTag = (tag: string) => {
    setTag(tag);
    ProposalRequests.getTags(tag).then(tags => tags && setSimilarTags(tags));
  };

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
                        options={similarTags.map(tag => ({ label: tag.label, value: tag }))}
                        onChange={inputTag}
                        onSelect={selectTag}
                        value={tag} />
          <Button hasIconOnly
                  iconDescription="Add Tag"
                  size="md"
                  onClick={() => addTag(Math.random())}
                  renderIcon={Add} />
        </div>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map(tag => {
              return (
                <Tag key={tag.id}
                     onClose={() => removeTag(tag.id)}>
                  {tag.label}
                </Tag>
              );
            })}
          </div>
        )}
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