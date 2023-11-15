import PersonalInformation, { UserInfo } from "./PersonalInformation";
import { Row, Image, Col, Stack } from "react-bootstrap";

interface UserPresentationInfo{
  image: string,
  summary: string,
  userInfo: UserInfo,
}

interface Props {
  userInfo: UserPresentationInfo
}
export default function PersonalPresentation({userInfo}: Props){
  return (
    <Row>
      <Col lg={6} xs={12} className="text-center mb-4">
        <Image src={userInfo.image} rounded fluid />
      </Col>
      <Col lg={6} xs={12}>
        <Stack gap={3}>
          <p>{userInfo.summary}</p>
          <PersonalInformation userInfo={userInfo.userInfo} />
        </Stack>
      </Col>
    </Row>
  );
}
