import { ProgressBar } from "react-bootstrap";

export interface Skill {
  name: string,
  level: number,
  group: string,
}
interface Props {
  group: string,
  skills: Skill[]
}

export default function TechnicalSkillsGroup({group, skills}: Props) {
  return (
    <tbody className="table-group-divider">
      <tr>
        <td colSpan={2} className="text-center">
          {group}
        </td>
      </tr>
      {skills.map(skill => (
        <tr key={skill.name}>
          <td>{skill.name}</td>
          <td>
            <ProgressBar min={0} now={skill.level} max={1}/>
          </td>
        </tr>
      ))}
    </tbody>
  );
}