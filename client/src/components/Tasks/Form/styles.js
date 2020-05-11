import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Information = styled.div`
  border-radius: 10px;
  width: 90vw;
  max-width: 900px;
  background: #fbfbfb;
  box-shadow: 0 2px 3px 0 rgba(60, 64, 67, 0.3),
    0 6px 10px 4px rgba(60, 64, 67, 0.15);
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
  transform: scale(0.5);

  &.scale-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  &.scale-enter-done {
    opacity: 1;
    transform: scale(1);
  }

  &.scale-exit-active {
    opacity: 0;
    transform: scale(0.5);
  }
`;

export const Header = styled.div`
  border-radius: 10px 10px 0 0;
  padding: 15px;
  background-color: ${(props) => props.color};

  @media (min-width: 700px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
`;

export const Indicators = styled.h3`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  position: relative;
  padding-top: 10px;

  ::before,
  ::after {
    display: none;
    content: "";
    position: absolute;
    left: calc(11%);
    height: 2px;
  }

  ::before {
    width: calc(78%);
    background-color: rgba(255, 255, 255, 0.5);
  }

  ::after {
    width: 0;
    background-color: #fbfbfb;
    transition: all 0.2s linear;
  }

  ::after {
    width: ${({ currentTab }) =>
      currentTab === 1
        ? "25%"
        : currentTab === 2
        ? "50%"
        : currentTab === 3
        ? "75%"
        : "0%"};
  }

  @media (min-width: 700px) {
    padding-top: 20px;

    ::before,
    ::after {
      top: calc(50% - 5px);
      display: block;
    }
  }
`;

export const Body = styled.div`
  border-radius: 0 0 10px 10px;
  padding: 15px;
  background-color: #fbfbfb;
  position: relative;
  height: 250px;

  @media (min-width: 700px) {
    padding: 20px;
    height: 310px;
  }
`;

export const Tab = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;

  &.tab-enter {
    opacity: 0;
    transform: scale(1);
  }

  &.tab-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  &.tab-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.tab-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  @media (min-width: 700px) {
    padding: 20px;
  }
`;

export const Footer = styled.div`
  padding: 0 15px 20px 15px;

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 30px 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const Right = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 700px) {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  user-select: none;
  font-size: 1em;

  @media (min-width: 700px) {
    padding-left: 35px;
  }
`;

export const CheckInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomCheck = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 19px;
  width: 19px;
  background-color: #eee;

  ::after {
    content: "";
    position: absolute;
    display: none;

    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  ${Label}:hover & {
    background-color: #ccc;
  }

  ${CheckInput}:checked ~ & {
    background-color: #343434;
  }

  ${CheckInput}:checked ~ &::after {
    display: block;
  }

  @media (min-width: 700px) {
    height: 25px;
    width: 25px;

    ::after {
      left: 9px;
      top: 4px;
      width: 4px;
      height: 10px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: filter 0.3s;
  width: 105px;
  cursor: ${(props) => (props.grayed ? "not-allowed" : "pointer")};

  :hover {
    filter: brightness(0.95);
  }

  :disabled {
    cursor: not-allowed;
  }

  :last-child {
    margin-right: 0;
  }
`;
