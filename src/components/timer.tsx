import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import SvgStop from "../assets/svgStop";
import theme from "../styles/theme";
import SvgPause from "../assets/svgPause";
import SvgPlay from "../assets/svgPlay";
import SvgUp from "../assets/svgUp";
import SvgDown from "../assets/svgDown";

const Timer = () => {
  const [isPlay, setIsPlay] = useState(true);
  const [isStart, setIsStart] = useState<boolean>(true);

  return (
    <>
      {isStart ? (
        <TimerContainer>
          <InputTimer>
            <TimeInput
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              type="number"
              maxLength={2}
              onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
            />
            <span>minutes</span>
          </InputTimer>
          <ControlTimer>
            <ControllBtn>
              <SvgUp stroke={theme.color.secondaryColor} width={40} height={40} strokeWidth={3.0} />
            </ControllBtn>
            <ControllBtn>
              <SvgDown stroke={theme.color.secondaryColor} width={40} height={40} strokeWidth={3.0} />
            </ControllBtn>
          </ControlTimer>
        </TimerContainer>
      ) : (
        <RemainContainer></RemainContainer>
      )}

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

const TimerContainer = styled.section`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.size.space9};
  margin-bottom: ${({ theme }) => theme.spacing.size.space16};
`;

const InputTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid ${({ theme }) => theme.color.secondaryColor};
  border-radius: ${({ theme }) => theme.size.radiusSize.rounded};
  padding: ${({ theme }) => theme.spacing.size.space12};

  span {
    margin-top: ${({ theme }) => theme.spacing.size.space14};
    ${({ theme }) => theme.size.text.XL4};
  }
`;

const TimeInput = styled.input`
  height: 5rem;
  text-align: center;
  font-weight: 900;
  background-color: ${({ theme }) => theme.color.primaryColor};
  outline: none;
  border: none;
  width: 5rem;
  color: ${({ theme }) => theme.color.secondaryColor};
  ${({ theme }) => theme.size.text.XL7};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const ControlTimer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  right: -84px;
  top: 16px;
  height: 10rem;
`;

const ControllBtn = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.primaryColor};
`;

const RemainContainer = styled.section`
  width: 320px;
  height: 260px;
  margin-top: ${({ theme }) => theme.spacing.size.space9};
  margin-bottom: ${({ theme }) => theme.spacing.size.space16};
  background-color: ${({ theme }) => theme.color.secondaryColor};
`;

const BottomContainer = styled.footer``;
const ButtonContent = styled.section`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
