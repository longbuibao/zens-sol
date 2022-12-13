import styled from "styled-components";

const Button = styled.button`
  background: ${({ bgColor }) => bgColor || "white"};
  color: ${({ textColor }) => textColor || "black"};
  padding: 10px 30px;
  border: none;
  font-size: 20px;
  margin: 10px;
`;

export default Button;
