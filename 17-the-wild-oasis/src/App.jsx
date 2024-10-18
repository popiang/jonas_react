import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Row>
                    <Heading as="h1">The Wild Oasis</Heading>
                    <div>
                        <Heading as="h2">Check in and out</Heading>
                        <Button onClick={() => alert("Check in!")}>
                            Check In
                        </Button>
                        <Button onClick={() => alert("Check out!")}>
                            Check Out
                        </Button>
                    </div>
                </Row>

                <Heading as="h3">Form</Heading>
                <Input type="number" placeholder="No of days" />
            </StyledApp>
        </>
    );
}

export default App;
