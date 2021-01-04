import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    margin: ${theme.spacings.small} 0px;

    background: ${theme.border.color};
  `}
`;
