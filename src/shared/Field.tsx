import styled from "styled-components";

const FieldGroup = styled.div`
    margin-bottom: 32px;
`;

const Label = styled.label`
    color: #6C727F;
    display: block;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 8px;
`

const Field = ({ children, label }: any) => {
    return <>
        <FieldGroup>
            <Label>{label}</Label>
            {children}
        </FieldGroup>
    </>
}

export default Field;