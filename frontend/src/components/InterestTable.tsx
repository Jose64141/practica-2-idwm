import { Card, ListGroup } from "react-bootstrap"

export enum interestType {
  'PRO',
  'HOBBY'
}

interface Props {
  title: string,
  interests: string[],
  type: interestType
}

export default function InterestTable({title, interests, type}: Props){
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h5>{title}</h5>
        </Card.Title>
      </Card.Body>
      <ListGroup {...type === interestType.HOBBY && {as:"ol",numbered:true}}>
        {interests.map((interest) => {
          return <ListGroup.Item key={interest}>{interest}</ListGroup.Item>;
        })}
      </ListGroup>
    </Card>
  );
}