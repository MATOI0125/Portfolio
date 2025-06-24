import Work1 from "../../assets/portfolio/1.jpg";
import Work2 from "../../assets/portfolio/2.png";
import Work3 from "../../assets/portfolio/3.png";

const WorkDetails = {
    1: {
        title: "项目名称：Awesome Web App",
        images: [Work1, Work2, Work3],
        description: "这个项目是一个响应式网页，主要功能是展示产品卡片、用户评价等内容，使用了React和Tailwind CSS。",
        github: "https://github.com/yourusername/project1",
    },
    2: {
        title: "项目名称：Mobile App UI Design",
        images: [Work2],
        description: "该App是为安卓平台设计的生活类应用，强调简洁的UI交互体验。",
        github: "https://github.com/yourusername/project2",
    },
  // 可继续添加其他作品...
};

export default WorkDetails;
