import "./intro.css";
import me from "../../assets/img/profileAvatarBetter.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Jon Snow</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop service for customers of allsizes, specializing
            in creating stylish, modern websites, web services and online stores
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          strokeWidth="2px"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              className="cls-1"
              d="M50.50848,22.50185v1.61159h-37.017V22.50185a18.50848,18.50848,0,1,1,37.017,0Z"
            />
            <path
              className="cls-2"
              d="M50.50848,44.30587c0,8.67053-8.28527,15.69745-18.50848,15.69745S13.49152,52.9764,13.49152,44.30587v-21.804a18.50848,18.50848,0,1,1,37.017,0Z"
            />
            <line
              className="cls-2"
              x1="32"
              y1="9.95148"
              x2="32"
              y2="18.80307"
            />
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
