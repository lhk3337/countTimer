import React from "react";
import styled from "styled-components";

interface Props {
  text: any;
  isStart?: boolean;
  setTimeNumber?: React.Dispatch<React.SetStateAction<number>>;
  setIsStart?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlay?: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Styled {
  [key: string]: any;
  isStart: boolean;
}
const Button = ({ setIsStart, text, isStart, setIsPlay, setTimeNumber }: Props) => {
  const onClick = () => {
    if (setIsStart) {
      setIsStart((prev) => !prev);
    } else if (setIsPlay) {
      setIsPlay((prev) => !prev);
    }
    if (setTimeNumber) {
      setTimeNumber(1);
    }
  };
  return (
    <StyledButton isStart={isStart} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<Styled>`
  padding-left: ${({ theme }) => theme.spacing.size.space10};
  padding-right: ${({ theme }) => theme.spacing.size.space10};
  padding-top: ${({ theme, isStart }) => (isStart ? theme.spacing.size.space5 : theme.spacing.size.space2)};
  padding-bottom: ${({ theme, isStart }) => (isStart ? theme.spacing.size.space5 : theme.spacing.size.space2)};

  background-color: ${({ theme }) => theme.color.secondaryColor};
  border-radius: ${({ theme }) => theme.size.radiusSize.rounded};
  ${({ theme }) => theme.size.text.XL2}
  color: ${({ theme }) => theme.color.primaryColor};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverColor};
  }
`;

export default Button;
