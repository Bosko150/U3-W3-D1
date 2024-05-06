import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteCompanies = useSelector((state) => state.favoriteCompanies.content);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={1}>
        {favoriteCompanies.includes(data.company_name) ? (
          <FaStar
            className="text-warning"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVORITES",
                payload: data.company_name,
              })
            }
          />
        ) : (
          <FaRegStar
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVORITES",
                payload: data.company_name,
              })
            }
          />
        )}
      </Col>
      <Col xs={2}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
