import React, { ChangeEvent, FC, useState } from "react";
import {
  FileUploaderDropContainer,
  FileUploaderItem,
  FormLabel,
  FormItem
} from "@carbon/react";

import { Props as InputProps } from "./Input";
import styles from "./styles.module.scss";

interface Props extends InputProps {

}

const FileUploader: FC<Props> = ({
                                   value,
                                   label,
                                   id,
                                   name,
                                   multiple,
                                   placeholder
                                 }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleAddFile = (e: ChangeEvent, { addedFiles }: { addedFiles: File[] }) => {
    setFiles(addedFiles);
  };

  return (
    <FormItem>
      <FormLabel className={styles.label}>{label}</FormLabel>
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
        labelText={placeholder} />
      <div className={styles.fileUploader}>
        {Array.isArray(files) && files.map((file, i) => {
          return (<FileUploaderItem name={file.name}
                                    status="complete"
                                    key={i} />);
        })}
      </div>
    </FormItem>
  );
};

export default FileUploader;