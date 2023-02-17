import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import SvgStop from "../assets/svgStop";
import theme from "../styles/theme";
import SvgPause from "../assets/svgPause";
import SvgPlay from "../assets/svgPlay";

const Timer = () => {
  const [isPlay, setIsPlay] = useState(true);
  const [isStart, setIsStart] = useState<boolean>(true);

  return (
    <>
      <span>ButtonContent</span>
      <BottomContainer>
        {isStart ? (
          <Button isStart={isStart} setIsStart={setIsStart} text="Start" />
        ) : (
          <ButtonContent>
            <Button
              isStart={isStart}
              setIsStart={setIsStart}
              text={<SvgStop fill={theme.color.thirdColor} width="40" height="40" />}
            />
            {isPlay ? (
              <Button
                isStart={isStart}
                setIsPlay={setIsPlay}
                text={<SvgPause fill={theme.color.primaryColor} width="40" height="40" />}
              />
            ) : (
              <Button
                isStart={isStart}
                setIsPlay={setIsPlay}
                text={<SvgPlay fill={theme.color.primaryColor} width="40" height="40" />}
              />
            )}
          </ButtonContent>
        )}
      </BottomContainer>
    </>
  );
};

export default Timer;
const BottomContainer = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.size.space24};
`;
const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
