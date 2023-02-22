import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import styled from "styled-components";
import SvgStop from "../assets/svgStop";
import theme from "../styles/theme";
import SvgPause from "../assets/svgPause";
import SvgPlay from "../assets/svgPlay";
import SvgUp from "../assets/svgUp";
import SvgDown from "../assets/svgDown";

interface Styled {
  [key: string]: any;
}
const Timer = () => {
  const [isPlay, setIsPlay] = useState<boolean>(true);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [timeNumber, setTimeNumber] = useState(60);
  const [initialCount, setInitialCount] = useState(1);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const min = 1;
  const max = 60;
  const incNumber = () => {
    if (initialCount < max) {
      setInitialCount(initialCount + 1);
      setTimeNumber((initialCount + 1) * 60);
    }
  };
  const decNumber = () => {
    if (initialCount > min) {
      setInitialCount(initialCount - 1);
      setTimeNumber((initialCount - 1) * 60);
    }
  };

  const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      const valueTime = Math.min(Math.max(value, min), max);
      setTimeNumber(valueTime * 60);
      setInitialCount(valueTime);
    }
  };

  const countStart = () => {
    setIsStart(false);
    setTimer(
      setInterval(() => {
        setTimeNumber((timeNumber) => timeNumber - 1);
      }, 1000)
    );
  };
  const countReset = () => {
    setTimeNumber(initialCount * 60);
    setTimer(null);
    clearInterval(timer!);
    setIsStart(true);
    setIsPlay(true);
  };

  const countPause = () => {
    clearInterval(timer!);
    setTimer(null);
    setIsPlay((prev) => !prev);
  };

  const countResume = () => {
    setTimer(
      setInterval(() => {
        setTimeNumber((timeNumber) => timeNumber - 1);
      }, 1000)
    );
    setIsPlay((prev) => !prev);
  };

  useEffect(() => {
    if (timeNumber === 0) {
      clearInterval(timer!);
      setIsStart(true);
      setIsPlay(true);
      setTimeNumber(initialCount * 60);
    }
  }, [initialCount, timeNumber, timer]);

  const displayTime = () => {
    const minutes = Math.floor(timeNumber / 60);
    const seconds = timeNumber % 60;
    return `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };

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
              value={initialCount}
              min={1}
              max={60}
              maxLength={2}
              onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
              onChange={handleCount}
            />
            <span>minutes</span>
          </InputTimer>
          <ControlTimer>
            <ControllBtn onClick={incNumber}>
              <SvgUp stroke={theme.color.secondaryColor} width={40} height={40} strokeWidth={3.0} />
            </ControllBtn>
            <ControllBtn onClick={decNumber}>
              <SvgDown stroke={theme.color.secondaryColor} width={40} height={40} strokeWidth={3.0} />
            </ControllBtn>
          </ControlTimer>
        </TimerContainer>
      ) : (
        <RemainContainer>
          <CountdownCircleTimer
            isPlaying={isPlay ? true : false}
            size={300}
            strokeWidth={20}
            initialRemainingTime={timeNumber}
            duration={initialCount * 60}
            trailColor={"#E5DDC8"}
            rotation={"counterclockwise"}
            colors={"#DB1F48"}
          >
            {() => (
              <CountDownNumber>
                {displayTime()}
                <span>Remain Time</span>
              </CountDownNumber>
            )}
          </CountdownCircleTimer>
        </RemainContainer>
      )}

      <BottomContainer>
        {isStart ? (
          <Button onClick={countStart} isStart={isStart}>
            Start
          </Button>
        ) : (
          <ButtonContent>
            <Button onClick={countReset} isStart={isStart}>
              <SvgStop fill={theme.color.thirdColor} width="50" height="50" />
            </Button>
            {isPlay ? (
              <Button onClick={countPause} isStart={isStart}>
                <SvgPause fill={theme.color.primaryColor} width="50" height="50" />
              </Button>
            ) : (
              <Button onClick={countResume} isStart={isStart}>
                <SvgPlay fill={theme.color.primaryColor} width="50" height="50" />
              </Button>
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
  -moz-appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
const ControlTimer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  right: -5rem;
  top: 2.4rem;
  height: 12rem;
`;

const ControllBtn = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.primaryColor};
`;

const RemainContainer = styled.section`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.size.space9};
  margin-bottom: ${({ theme }) => theme.spacing.size.space16};
  background-color: ${({ theme }) => theme.color.primaryColor};
`;

const CountDownNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.size.space6};
  ${({ theme }) => theme.size.text.XL6};
  span {
    margin-top: ${({ theme }) => theme.spacing.size.space10};
    ${({ theme }) => theme.size.text.XL2};
  }
`;

const BottomContainer = styled.footer``;
const ButtonContent = styled.section`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Button = styled.button<Styled>`
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
