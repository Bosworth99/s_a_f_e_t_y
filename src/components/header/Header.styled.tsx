import styled from 'styled-components';

export const Header = styled.div`
  width: auto;
  height: 20px;
  margin: 20 auto;
  padding: 20px;
  background-color: #281616;
  color: #ddd;
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  z-index: 100;
  opacity: 0.5;
  cursor: pointer;

  & :hover {
    opacity: 1;
  }
`;
