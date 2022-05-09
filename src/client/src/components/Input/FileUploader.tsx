import React, { ChangeEvent, FC, useState } from "react";
import { FileUploaderDropContainer, FileUploaderItem } from "@carbon/react";

import { Props as InputProps } from "./Input";

interface Props extends InputProps {

}


const FileUploader: FC<Props> = ({
                                   value,
                                   label,
                                   id,
                                   name,
                                   multiple
                                 }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleAddFile = (e: ChangeEvent, { addedFiles }: { addedFiles: File[] }) => {
    setFiles(addedFiles);
  };

  return (
    <>
      <FileUploaderDropContainer
        accept={[
          "image/jpeg",
          "image/png"
        ]}
        id={id}
        name={name}
        value={value}
        multiple={multiple}
        onAddFiles={handleAddFile}
        labelText={label} />
      {Array.isArray(files) && files.map((file, i) => {
        return (<FileUploaderItem name={file.name}
                                  status="complete"
                                  key={i} />);
      })}
    </>
  );
};

export default FileUploader;