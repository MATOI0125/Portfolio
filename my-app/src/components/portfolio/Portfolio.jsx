import React, { useRef, useState, useEffect } from 'react';
import './portfolio.css';

// TQ
import TQ_FV from '../../assets/portfolio/TQ_FV.jpg';
import TQ_01 from '../../assets/portfolio/TQ_01.jpg';
import TQ_02 from '../../assets/portfolio/TQ_02.jpg';
import TQ_03 from '../../assets/portfolio/TQ_03.jpg';
import TQ_04 from '../../assets/portfolio/TQ_04.jpg';

// SF
import SF_FV from '../../assets/portfolio/SF_FV.jpg';
import SF_01 from '../../assets/portfolio/SF_01.jpg';
import SF_02 from '../../assets/portfolio/SF_02.jpg';
import SF_03 from '../../assets/portfolio/SF_03.jpg';

// DJ
import DJ_FV from '../../assets/portfolio/DJ_FV.jpg';
import DJ_01 from '../../assets/portfolio/DJ_01.jpg';
import DJ_02 from '../../assets/portfolio/DJ_02.jpg';
import DJ_03 from '../../assets/portfolio/DJ_03.jpg';

// TO
import TO_FV from '../../assets/portfolio/TO_FV.jpg';
import TO_01 from '../../assets/portfolio/TO_01.jpg';
import TO_02 from '../../assets/portfolio/TO_02.jpg';
import TO_03 from '../../assets/portfolio/TO_03.jpg';
import TO_04 from '../../assets/portfolio/TO_04.jpg';
import TO_05 from '../../assets/portfolio/TO_05.jpg';

// JI
import JI_FV from '../../assets/portfolio/JI_FV.jpg';
import JI_01 from '../../assets/portfolio/JI_01.jpg';
import JI_02 from '../../assets/portfolio/JI_02.jpg';
import JI_03 from '../../assets/portfolio/JI_03.jpg';
import JI_04 from '../../assets/portfolio/JI_04.jpg';
import JI_05 from '../../assets/portfolio/JI_05.jpg';
import JI_06 from '../../assets/portfolio/JI_06.jpg';

// MI
import MI_FV from '../../assets/portfolio/MI_FV.jpg';
import MI_01 from '../../assets/portfolio/MI_01.jpg';
import MI_02 from '../../assets/portfolio/MI_02.jpg';

const works = [
  {
    key: 'TripQuset',
    title: 'TQ 系列',
    preview: TQ_FV,
    thumb: TQ_FV,
    detail: 'TQ 作品详情',
    series: [TQ_01, TQ_02, TQ_03, TQ_04],
  },
  {
    key: 'Sofari',
    title: 'SF 系列',
    preview: SF_FV,
    thumb: SF_FV,
    detail: 'SF 作品详情',
    series: [SF_01, SF_02, SF_03],
  },
  {
    key: 'Osmo pocket3',
    title: 'DJ 系列',
    preview: DJ_FV,
    thumb: DJ_FV,
    detail: 'DJ 作品详情',
    series: [DJ_01, DJ_02, DJ_03],
  },
  {
    key: 'Tori',
    title: 'TO 系列',
    preview: TO_FV,
    thumb: TO_FV,
    detail: 'TO 作品详情',
    series: [TO_01, TO_02, TO_03, TO_04, TO_05],
  },
  {
    key: '自白ブック',
    title: 'JI 系列',
    preview: JI_FV,
    thumb: JI_FV,
    detail: 'JI 作品详情',
    series: [JI_01, JI_02, JI_03, JI_04, JI_05, JI_06],
  },
  {
    key: 'みっちゃん',
    title: 'MI 系列',
    preview: MI_FV,
    thumb: MI_FV,
    detail: 'MI 作品详情',
    series: [MI_01, MI_02],
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [mainImg, setMainImg] = useState(works[0].preview);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const thumbsRef = useRef([]);

  // 鼠标滚轮切换系列
  const handlePreviewWheel = (e) => {
    if (e.deltaY > 0 && current < works.length - 1) {
      setCurrent(current + 1);
    } else if (e.deltaY < 0 && current > 0) {
      setCurrent(current - 1);
    }
  };

  // 点击右侧缩略图切换系列
  const handleThumbClick = (idx) => {
    if (idx === current) return;
    setIsTransitioning(true);
    setCurrent(idx);
    setTimeout(() => {
      setMainImg(works[idx].preview);
      setIsTransitioning(false);
    }, 150);
  };

  // 点击系列小图切换大图
  const handleSeriesClick = (img) => {
    if (img === mainImg) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setMainImg(img);
      setIsTransitioning(false);
    }, 100);
  };

  // 当系列切换时，自动更新主图
  useEffect(() => {
    setMainImg(works[current].preview);
  }, [current]);

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="portfolio-preview"
        onWheel={handlePreviewWheel}
        style={{
          position: 'relative',
          backgroundImage: `url(${works[current].preview})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 半透明遮罩 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,255,255,0.75)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
        <div className="main-image-container" style={{ position: 'relative', zIndex: 2 }}>
          <img
            src={mainImg}
            alt={works[current].title}
            className={`main-image ${isTransitioning ? 'transitioning' : ''}`}
          />
        </div>
        {/* 系列缩略图，最左边为FV */}
        <div className="series-thumbnails" style={{ position: 'relative', zIndex: 2 }}>
          {[works[current].preview, ...works[current].series].map((img, idx) => (
            <div
              key={idx}
              className={`series-thumb-container ${mainImg === img ? 'active' : ''}`}
              onClick={() => handleSeriesClick(img)}
            >
              <img
                src={img}
                alt={`系列${idx === 0 ? 'FV' : idx}`}
                className="series-thumb"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio-thumbs">
        {works.map((work, idx) => (
          <div
            key={work.key}
            ref={el => thumbsRef.current[idx] = el}
            className={`thumb-container ${current === idx ? 'active' : ''}`}
            onClick={() => handleThumbClick(idx)}
          >
            <img
              src={work.thumb}
              alt={work.title}
              className="portfolio-thumb"
            />
            <div className="thumb-overlay">
              <span className="thumb-title">{work.key}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
