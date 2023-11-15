import { Badge, Col, Row } from "react-bootstrap";
import { EnvelopeFill, Linkedin } from "react-bootstrap-icons";

export interface UserInfo {
  city: string,
  email: string,
  age: number,
  linkedIn: string
}

interface Props {
  userInfo: UserInfo
}

export default function PersonalInformation({userInfo}: Props){
  return (
    <Row>
      <h5>Datos personales</h5>
      <Col xs>
        <Row className="text-center">
          <Col lg={4} md={6} xs={12} className="mt-4">
            <Badge bg="secondary">{userInfo.city}</Badge>
          </Col>
          <Col lg={4} md={6} xs={12} className="mt-4">
            <Badge bg="secondary">{userInfo.age} años</Badge>
          </Col>
          <Col lg={4} md={6} xs={12} className="mt-4">
            <a href={userInfo.linkedIn}>
              <Badge bg="secondary">
                <Linkedin /> LinkedIn
              </Badge>
            </a>
          </Col>
          <Col lg={12} md={6} xs={12} className="mt-4 text-truncate">
            <a href={`mailto:${userInfo.email}`}>
              <Badge bg="secondary">
                <EnvelopeFill /> {userInfo.email}
              </Badge>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}