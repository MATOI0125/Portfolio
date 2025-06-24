import React, { useRef, useState, useEffect } from 'react';
import './Portfolio.css';

const works = [
  {
    preview: 'images/preview1.jpg',
    thumb: 'images/thumb1.jpg',
    detail: '作品1详情',
  },
  {
    preview: 'images/preview2.jpg',
    thumb: 'images/thumb2.jpg',
    detail: '作品2详情',
  },
  {
    preview: 'images/preview2.jpg',
    thumb: 'images/thumb2.jpg',
    detail: '作品3详情',
  },
  {
    preview: 'images/preview2.jpg',
    thumb: 'images/thumb2.jpg',
    detail: '作品4详情',
  },
  {
    preview: 'images/preview2.jpg',
    thumb: 'images/thumb2.jpg',
    detail: '作品5详情',
  },
  {
    preview: 'images/preview2.jpg',
    thumb: 'images/thumb2.jpg',
    detail: '作品6详情',
  },
  // 继续添加更多作品...
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const listRef = useRef(null);
  const thumbsRef = useRef([]);

  // 只监听中间详情区滚动
  const handleScroll = () => {
    const scrollTop = listRef.current.scrollTop;
    const itemHeight = window.innerHeight;
    const idx = Math.round(scrollTop / itemHeight);
    setCurrent(idx);
  };

  // 点击缩略图，滚动到对应详情
  const handleThumbClick = (idx) => {
    setCurrent(idx);
    if (listRef.current) {
      listRef.current.scrollTo({
        top: idx * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-preview">
        <img
          src={works[current].preview}
          alt=""
          style={{ maxWidth: '90%', maxHeight: '90%' }}
        />
      </div>
      <div
        className="portfolio-list"
        ref={listRef}
        onScroll={handleScroll}
      >
        {works.map((work, idx) => (
          <div className="portfolio-item" key={idx}>
            <h2>{work.detail}</h2>
          </div>
        ))}
      </div>
      <div
        className="portfolio-thumbs"
        onWheel={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
      >
        {works.map((work, idx) => (
          <img
            key={idx}
            ref={el => thumbsRef.current[idx] = el}
            src={work.thumb}
            alt=""
            className={`portfolio-thumb${current === idx ? ' active' : ''}`}
            style={{
              cursor: 'pointer',
              transform: current === idx ? 'rotate(-8deg) scale(1.1)' : 'none'
            }}
            onClick={() => handleThumbClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
