import styled, { DefaultTheme } from 'styled-components';

interface IConfirmationInfoIconProps {
  variant: keyof DefaultTheme;
}

export const ConfirmationContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem 10rem;
`;

export const ConfirmationContent = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2.5rem;

  width: 100%;
  max-width: 70rem;
`;

export const ConfirmationHgroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.625rem;
    color: ${(props) => props.theme['yellow-700']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-700']};
    font-stretch: 100;
  }
`;

export const ConfirmationPanel = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 6.375rem;
  width: 100%;
`;

export const ConfirmationOrderInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 32.875rem;

  background: ${(props) => props.theme.background};
  background-clip: padding-box;
  position: relative;

  border: 1px solid transparent;

  border-radius: 6px 36px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      102.89deg,
      ${(props) => props.theme['yellow-500']} 2.61%,
      ${(props) => props.theme['purple-500']} 98.76%
    );
  }
`;

export const ConfirmationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;

export const ConfirmationInfoIcon = styled.div<IConfirmationInfoIconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  background: ${(props) => props.theme[props.variant]};
  border-radius: 1000px;
`;

export const ConfirmationInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ConfirmationInfoSpan = styled.span`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['gray-600']};
`;

export const ConfirmationInfoBold = styled.strong`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['gray-600']};
  font-weight: 700;
`;
