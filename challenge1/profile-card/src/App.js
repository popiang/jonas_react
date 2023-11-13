import Intro from "./components/Intro";
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";
import "./styles.css";

const skillList = [
    {
        skillName: "React",
        emoji: "💪🏻",
        color: "red",
    },
    {
        skillName: "Node",
        emoji: "🖐🏻",
        color: "yellow",
    },
    {
        skillName: "Javascript",
        emoji: "👍🏻",
        color: "green",
    },
];

function App() {
    return (
        <div className="card">
            <Avatar photo={`../jonas.jpeg`} name={`Jonas Schmedtmann`} />
            <div className="data">
                <Intro
                    name={`Jonas Schmedtmann`}
                    description={`Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cood (and end), or to just enjoy the Portuguese sun at the beach.`}
                />
                <SkillList skills={skillList} />
            </div>
        </div>
    );
}

export default App;
