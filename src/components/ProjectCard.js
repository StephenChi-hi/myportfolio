import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="/git " className=" img_h" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br /> <br />
          <a href={url}> Learn More</a>
        </div>
      </div>
    </Col>
  );
}
