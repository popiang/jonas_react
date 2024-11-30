import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;

function DashboardLayout() {
    const { bookings, isLoading } = useRecentBookings();
    const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();

    if (isLoading || isLoading2) return <Spinner />;

    return (
        <StyledDashboardLayout>
            <div>Statistic</div>
            <div>Today activity</div>
            <div>Chart stay duration</div>
            <div>Chart sales</div>
        </StyledDashboardLayout>
    );
}

export default DashboardLayout;
