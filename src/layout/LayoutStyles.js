import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #fff;
  display: ${({ visible }) => visible ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Icon = styled.span`
  font-size: 30px;
`;
