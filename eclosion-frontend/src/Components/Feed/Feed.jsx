import { useEffect, useState } from "react";
import NoticeCard from "./Card-feed";

const Feed = () => {
  const [news, setNews] = useState([]);
  const [liked, setLiked] = useState([]);
  const [commented, setCommented] = useState([]);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4001/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        console.log(data);

        setLiked(new Array(data.length).fill(false));
        setCommented(new Array(data.length).fill(false));
      })
      .catch((err) => console.error("Error al cargar news:", err));
  }, []);

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
      <div className="estructura-noticia-completa pt-0">
        {news.map((notice, index) => (
          <NoticeCard
            key={index}
            news={notice}
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

