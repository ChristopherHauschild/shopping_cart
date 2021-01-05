import styled, { css } from 'styled-components';
import { FaBan } from 'react-icons/fa';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 200px;
    padding: 0px ${theme.spacings.small};

    strong {
      text-align: center;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const Icon = styled(FaBan)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxxlarge};
  `}
`;
