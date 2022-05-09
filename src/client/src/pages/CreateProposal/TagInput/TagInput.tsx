import React, { FC, useState } from "react";

import Input from "../../../components/Input/Input";
import { TagType } from "../../../types/ProposalType";

interface Props {
  tags: TagType[];
}

const TagInput: FC<Props> = ({ tags }) => {
  const [newTag, setNewTag] = useState("");
  const [newTags, setNewTags] = useState<string[]>([]);

  const addTag = () => {
    setNewTags(prevState => ([...prevState, newTag]));
  };

  return (
    <div>
      <Input type="text" label="Tags" onChange={setNewTag} value={newTag} id="Tags"/>
      <button type="button" onClick={addTag}>add</button>
      <div>
        {newTags.map(tag => {
          return <p>{tag}</p>;
        })}
      </div>
    </div>
  );
};

export default TagInput;