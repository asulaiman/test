/* NPM */
import styled from "@/lib/styledComponents";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledRow = styled.div`
    display: flex;
    margin-right: 20px;
    padding: 10px;
    align-items: center;
    h4 {
        margin-right: 10px;
        width: 100px;
    }
    p {
        max-width: 100px;
        word-break: break-all;
    }
`;
