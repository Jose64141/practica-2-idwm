import { Col, Row, Table } from "react-bootstrap";
import TechnicalSkillsGroup, { Skill } from "./TechnicalSkillsGroup";
interface Props {
  skills: Skill[]
}

export default function TechnicalSkillsPresentation({skills}: Props){
  const groups = Array.from(new Set(skills.map(skill => skill.group)));

  return (
    <Row>
      <Col xs={12} className="mt-4">
        <h5>Habilidades Técnicas</h5>
      </Col>
      <Col xs={12} className="mt-4">
        <Table hover>
          <thead>
          <tr>
            <th>Habilidad</th>
            <th>Nivel</th>
          </tr>
          </thead>
          {groups.map(group => (
            <TechnicalSkillsGroup
              key={group}
              group={group}
              skills={skills.filter(skill => skill.group === group)}
            />
          ))}
        </Table>
      </Col>
    </Row>

    );
}