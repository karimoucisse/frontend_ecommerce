import styled from "styled-components";

const InputContainer = styled.input`
    width: ${(props) => props.width ? props.width : "80%"};
    height: ${(props) => props.height ? props.height : "40px"};
    border: ${(props) => props.border ? props.border : "1px solid grey"};
    padding: ${(props) => props.padding ? props.padding : "0 0 0 20px"};
    font-size: 18px;
`
const Input = ({placeholder, name, type, onChange, value, width, height, border, padding}) => {
  return (
        <>
            <InputContainer
                placeholder={placeholder}
                name={name}
                type={type}
                onChange={onChange}
                value= {value}
                width= {width}
                height= {height} 
                border= {border} 
                padding= {padding}
            />
        </>
    )
};

export default Input;
