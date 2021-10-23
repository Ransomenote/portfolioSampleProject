import "./about.css";
import cardImg from "../../assets/img/topDesk.png";
import awardImg from "../../assets/img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={cardImg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established face that a reader will be distracted by the
          readable content
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          autem unde mollitia explicabo quia est temporibus reiciendis
          necessitatibus debitis praesentium! Vel esse quidem eos reprehenderit
          ad blanditiis quia alias dolores?
        </p>
        <div className="a-award">
          <img src={awardImg} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Explicabo voluptas placeat ab atque facere inventore iste dolores
              blanditiis repellendus molestiae recusandae ipsa cum
              necessitatibus enim nulla, amet dolorum deserunt nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
