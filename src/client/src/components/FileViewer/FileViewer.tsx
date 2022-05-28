import React, { FC, Children, useState, ReactElement } from "react";
import { ModalHeader, ModalBody, ComposedModal, Button } from "@carbon/react";
import { PreviousOutline, NextOutline, ZoomFit } from "@carbon/icons-react";

import styles from "./styles.module.scss";

interface Props {
  filetype: "image";
}

const FileViewer: FC<Props> = ({ filetype, children }) => {
  const [opened, setOpened] = useState(false);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  const childrenArray = Children.toArray(children);
  const childrenCount = Children.count(children);

  const nextIndex = () => {
    setCurrentElementIndex(prevState => {
      const nextIndex = prevState + 1;
      return childrenCount - 1 >= nextIndex ? nextIndex : 0;
    });
  };

  const prevIndex = () => {
    setCurrentElementIndex(prevState => {
      const prevIndex = prevState - 1;
      return prevIndex < 0 ? childrenCount - 1 : prevIndex;
    });
  };

  const openModal = (index: number) => {
    setOpened(true);
    setCurrentElementIndex(index);
  };

  const closeModal = () => {
    setOpened(false);
    setCurrentElementIndex(0);
  };

  return (
    <>
      {childrenArray.map((child, index) => {
        return (
          <div className={styles.fileWrapper} onClick={() => openModal(index)} key={index}>
            <div className={styles.fileOverlay}><ZoomFit size={32} /></div>
            {child}
          </div>
        );
      })}
      <ComposedModal open={opened} size="lg" onClose={closeModal}>
        <ModalHeader closeModal={closeModal}
                     title={`${currentElementIndex + 1} from ${childrenCount}`} />
        <ModalBody>
          <div className={styles.wrapper}>
            {childrenCount > 1 && (
              <Button onClick={prevIndex}
                      kind="ghost"
                      renderIcon={(props: any) => <PreviousOutline size={24} {...props} />}
                      iconDescription="Previous File"
                      tooltipPosition="right"
                      hasIconOnly />
            )}
            {filetype === "image" && (
              <img src={(childrenArray[currentElementIndex] as ReactElement).props.src}
                   alt={(childrenArray[currentElementIndex] as ReactElement).props.alt}
                   className={styles.image} />
            )}
            {childrenCount > 1 && (
              <Button onClick={nextIndex}
                      kind="ghost"
                      renderIcon={(props: any) => <NextOutline size={24} {...props} />}
                      iconDescription="Next File"
                      tooltipPosition="left"
                      hasIconOnly />
            )}
          </div>
        </ModalBody>
      </ComposedModal>
    </>
  );
};

export default FileViewer;