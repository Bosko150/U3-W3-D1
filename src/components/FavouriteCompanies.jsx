import { useSelector } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FavouriteCompanies = () => {
  const favoriteCompanies = useSelector((state) => state.favoriteCompanies.content);

  return (
    <Container>
      <h1 className="display-4">Favorite companies</h1>
      {favoriteCompanies.map((company, i) => (
        <Row key={i}>
          <Col className="my-3">
            <Link to={`/${company}`} className="m-0">
              {company}
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FavouriteCompanies;
