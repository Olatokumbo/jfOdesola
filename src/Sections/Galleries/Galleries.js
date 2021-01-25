import { Typography } from "@material-ui/core";
import React, {useState, useCallback} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { Photos } from "../../components/Photos/Photos";
import style from "./Galleries.module.css";
const Galleries = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className={style.galleries} id="gallery">
      <Typography className={style.title}>Gallery</Typography>
      <Gallery photos={Photos} direction="column" onClick={openLightbox}/>
      <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={Photos.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
    </div>
  );
};

export default Galleries;
