import styled from "styled-components";
import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // load the authenticated user
    const { user, isLoading, isAuthenticated, fetchStatus } = useUser();

    // if there's NO authenticated user, redirect to the /login
    useEffect(() => {
        if (!isAuthenticated && !isLoading && fetchStatus) navigate("/login");
    }, [isLoading, isAuthenticated, fetchStatus, navigate]);

    // while loading show a spinner
    if (isLoading)
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );

    // if there IS a user, render the app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
