import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SlideBrand.scss";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  );
}

export { NextArrow, PrevArrow };
