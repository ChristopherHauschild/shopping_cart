import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 600px;
    margin: ${theme.spacings.medium} auto;
    padding: ${theme.spacings.small} 0px;

    background: ${theme.colors.white};
    border-radius: ${theme.border.radius.large};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `}
`;
