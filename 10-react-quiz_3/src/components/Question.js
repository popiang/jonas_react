import Options from "./Options";

function Question({ questions, index }) {
    return (
        <div>
            <h4>{questions.at(index)}</h4>
            <Options />
        </div>
    );
}

export default Question;
