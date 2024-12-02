import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.main`
    background-color: orange;
    padding: 20px;
`;

function App() {
    return (
        <>
			<GlobalStyles />
            <StyledApp>
				<Input />
				<Button>First Button</Button>
			</StyledApp>
        </>
    );
}

export default App;
