
import React, { useState } from "react";
import noticias from "./notices";
import NoticeCard from "./Card-feed";

const Feed = () => {
  const [liked, setLiked] = useState(Array(noticias.length).fill(false));
  const [commented, setCommented] = useState(Array(noticias.length).fill(false));
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };

  const handleComment = (index) => {
    const updated = [...commented];
    updated[index] = !updated[index];
    setCommented(updated);
    setShow(true);
    setActiveIndex(index);
  };

  const handleClose = () => {
    setShow(false);
    setActiveIndex(null);
  };

  return (
    <>
      <h1 className="text-left">Feed</h1>
      <div className="estructura-noticia-completa">
        {noticias.map((noticia, index) => (
          <NoticeCard
            key={noticia.id}
            noticia={noticia}
            index={index}
            liked={liked}
            commented={commented}
            handleLike={handleLike}
            handleComment={handleComment}
            show={show}
            handleClose={handleClose}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;

