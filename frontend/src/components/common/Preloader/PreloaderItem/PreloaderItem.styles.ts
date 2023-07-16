import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0%, 100%  {
      transform: translate(0);
    }
    25% {
      transform: translate(160%);
    }
    50% {
      transform: translate(160%, 160%);
    }
    75% {
      transform: translate(0, 160%);
    }
`

export const PreloaderItemWrapper = styled.span`
    border: 0;
    margin: 0;
    width: 40%;
    height: 40%;
    position: absolute;
    border-radius: 50%;
    animation: ${spin} 2s ease infinite;
`;
