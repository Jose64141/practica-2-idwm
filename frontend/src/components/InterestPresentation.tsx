import { Col, Row } from "react-bootstrap";
import InterestTable, { interestType } from "./InterestTable";

interface Interest {
  name: string,
  type: string
}

interface Props {
  interests: Interest[]
}

export default function InterestPresentation({interests}:Props){
  const proInterests = interests.filter((interest) => interest.type === "PRO")
    .map(interest => interest.name);
  const hobbyInterests = interests.filter((interest) => interest.type === "HOBBY")
    .map(interest => interest.name);

  return (
    <Row>
      <Col lg={6} className="mt-4">
        <InterestTable title="Áreas de interés" interests={proInterests} type={interestType.PRO} />
      </Col>
      <Col lg={6} className="mt-4">
        <InterestTable title="Intereses Personales" interests={hobbyInterests} type={interestType.HOBBY} />
      </Col>
    </Row>
  );
}