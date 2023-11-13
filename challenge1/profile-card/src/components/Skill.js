function Skill(props) {
	return (
		<p className="skill" style={{backgroundColor: props.color}}>{props.skill} {props.emoji}</p>
	)
}

export default Skill
