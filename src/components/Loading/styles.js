import styled, { css } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 200px;

    strong {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const Icon = styled(FaSpinner)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xxxlarge};

    animation: rotate 2s linear infinite;

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
