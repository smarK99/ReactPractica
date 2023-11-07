import { Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="justify-content-md-center row">
          <div className="col-md-auto">
            <h1>About Us</h1>
            <p>Somos nosotros los hackers Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi alias tempora optio sapiente, sunt assumenda sit explicabo et recusandae inventore amet id, labore molestias officiis reiciendis. Obcaecati inventore cupiditate quia.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src/assets/hans landa.jpg" />
              <Card.Body>
                <Card.Title>Hans Landa</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 col-12">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src/assets/dosia.jpg" />
              <Card.Body>
                <Card.Title>Mikail Stoliarov</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 col-12">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="src/assets/daddy.jpg" />
              <Card.Body>
                <Card.Title>Ramon Rodriguez</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
