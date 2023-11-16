import { gql, useQuery } from "@apollo/client";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import PersonalPresentation from "./components/PersonalPresentation";
import InterestPresentation from "./components/InterestPresentation";
import TechnicalSkillsPresentation from "./components/TechnicalSkillsPresentation";

const GET_PROFILE = gql`
  query GetProfile {
    profile(email: "jose.alcayaga@alumnos.ucn.cl") {
      id
      name
      lastName
      age
      city
      country
      linkedInUrl
      summary
      interests {
        name
        type
      }
      skills {
        group
        level
        name
      }
      imageUrl
      email
    }
  }

`;

export default function PortfolioPage() {
  const { loading, error, data } = useQuery(GET_PROFILE);
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error :(</p>;
  return (
    <>
      <Header name={`${data?.profile.name} ${data?.profile.lastName}`} />
      <Container className="mt-4">
        <PersonalPresentation userInfo={{
          image: data?.profile.imageUrl,
          summary: data?.profile.summary,
          userInfo: {
            email: data?.profile.email,
            city: data?.profile.city,
            age: data?.profile.age,
            linkedIn: data?.profile.linkedInUrl,
          }
        }} />
        <InterestPresentation interests={data?.profile.interests} />
        <TechnicalSkillsPresentation skills={data?.profile.skills} />
      </Container>
    </>
  );
}