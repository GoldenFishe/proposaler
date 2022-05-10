import React, { FC, FormEvent, useEffect, useState } from "react";
import { Add } from "@carbon/icons-react";
import { nanoid } from "nanoid";

import { NewTagType } from "./types";
import { ProposalsModel } from "../../models/ProposalsModel";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Tag from "../../components/Tag/Tag";
import styles from "./style.module.scss";

interface Props {
  proposalsModel: ProposalsModel;
}

const CreateProposal: FC<Props> = ({ proposalsModel }) => {
  const [tags, setTags] = useState<NewTagType[]>([]);
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    proposalsModel.getTags();
  }, [proposalsModel]);

  const create = (e: FormEvent) => {
    const newProposal = new FormData((e.target) as HTMLFormElement);
    tags.forEach(tag => newProposal.append('tags[]', tag.label));
    proposalsModel.create(newProposal);
  };

  const addTag = (id: string) => {
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
          <Input type="text"
                 label="Tag"
                 id="tag"
                 onChange={setTag}
                 value={tag}/>
          <Button hasIconOnly
                  iconDescription="Add Tag"
                  size="md"
                  onClick={() => addTag(nanoid())}
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