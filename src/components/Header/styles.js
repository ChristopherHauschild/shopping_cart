import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    h1 {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
