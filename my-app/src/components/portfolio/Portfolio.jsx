// import React, { useState } from 'react';
// import "./portfolio.css"
// import Menu from "./Menu";

// const Portfolio = () => {
    
//     const [items, setItems] = useState(Menu);
//     const filterItem = (categoryItem) => {
//         const updatedItems = Menu.filter((curElem) => {
//             return curElem.category === categoryItem;
//         });

//         setItems(updatedItems);
//     };

//     return (
//         <section className="work container" id="portfolio">
//             <h2 className="section_title">Recent Works</h2>

//             <div className="work_filters">
//                 <span className="work_item" onClick={() => setItems(Menu)}>ALL</span>
//                 <span className="work_item" onClick={() => filterItem("Web")}>Web</span>
//                 <span className="work_item" onClick={() => filterItem("App")}>App</span>
//                 <span className="work_item" onClick={() => filterItem("Design")}>Design</span>
//             </div>

//             <div className="work_container grid">
//                 {items.map((elem) =>{
//                     const{ id, image, title, category, link, desc} = elem;
//                     return(
//                         <div className="work_card" key={id}>
//                             <div className="work_thumbnail">
//                                 <img src={image} alt="" className="work_img" />
//                                 <div className="work_mask"></div>
//                             </div>

//                             <span className="work_category">{category}</span>
//                             <h3 className="work_title">{title}</h3> 
//                             <span className='work_desc'>{desc}</span>
                            
//                             <a href={link} className="work_button">
//                                 <i className="icon-link work_button-icon"></i>
//                             </a>

//                         </div>
//                     )
//                 })}
//             </div>
//         </section>
//     )
// }
// export default Portfolio;

import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu";
import WorkDetails from "./WorkDetails";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkId, setSelectedWorkId] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
  };

  const openModal = (id) => {
    setSelectedWorkId(id);
    setIsModalOpen(true);
    setShowFullDescription(false);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkId(null);
  };

  const nextImage = () => {
    if (selectedWorkId !== null) {
      const images = WorkDetails[selectedWorkId].images;
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedWorkId !== null) {
      const images = WorkDetails[selectedWorkId].images;
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    }
  };

  const selectedWork = selectedWorkId !== null ? WorkDetails[selectedWorkId] : null;

  return (
    <section className="work container" id="portfolio">
      <h2 className="section_title">最近の作品｜Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>ALL</span>
        <span className="work_item" onClick={() => filterItem("Web")}>Web</span>
        <span className="work_item" onClick={() => filterItem("App")}>App</span>
        <span className="work_item" onClick={() => filterItem("Design")}>Design</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail" onClick={() => openModal(id)}>
                <img src={image} alt={title} className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
            </div>
          );
        })}
      </div>

      {isModalOpen && selectedWork && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal_title">{selectedWork.title}</h2>

            <div className="modal_image_slider">
              <button className="nav_button" onClick={prevImage}>←</button>
              <img
                src={selectedWork.images[currentImageIndex]}
                alt=""
                className="modal_image"
              />
              <button className="nav_button" onClick={nextImage}>→</button>
            </div>

            <div className="modal_text_scroll">
              <p className="toggle_desc" onClick={() => setShowFullDescription(!showFullDescription)}>
              作品紹介（クリックで開く / 閉じる）
              </p>
              {showFullDescription && (
                <p className="modal_description">{selectedWork.description}</p>
              )}

              <a
                href={selectedWork.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal_github_link"
              >
                🔗 查看 GitHub 项目
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
