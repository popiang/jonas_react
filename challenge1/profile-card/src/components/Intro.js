function Intro(props) {
	return (
		<div className="intro">
			<h1>{props.name}</h1>
			<p>{props.description}</p>
		</div>
	)
}

export default Intro
