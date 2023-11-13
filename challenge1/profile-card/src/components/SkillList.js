import Skill from "./Skill";

function SkillList(props) {
    return (
        <div className="skill-list">
            {props.skills &&
                props.skills.map((skill) => (
                    <Skill key={skill.skillName} skill={skill.skillName} emoji={skill.emoji} color={skill.color} />
                ))}
        </div>
    );
}

export default SkillList;
