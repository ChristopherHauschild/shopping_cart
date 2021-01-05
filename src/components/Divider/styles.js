import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    margin: ${theme.spacings.small} 0px;

    background: ${theme.border.color};
  `}
`;
