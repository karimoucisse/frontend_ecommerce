import styled from "styled-components";

const SelectContainer = styled.select`
    background-color: #f5f5f5;
    font-size: 16px;
`
const Option = styled.option`
    background-color: #023047;
    color: #ffff;
    font-size: 16px;
`
const Select = () => {
    return (
        <SelectContainer >
            <Option value="prix croissant">prix croissant</Option>
            <Option value="prix décroissant">prix décroissant</Option>
        </SelectContainer>

    )
};

export default Select;
