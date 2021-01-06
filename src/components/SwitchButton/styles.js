import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 600px;
    margin: ${theme.spacings.medium} auto 0px;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

    background: ${(p) => (p.selected ? theme.colors.primary : theme.colors.white)};
    border-radius: ${theme.border.radius.medium};
    border: ${(p) => (p.selected ? `1px solid ${theme.border.color}` : 'none')};
    outline: none;
    box-shadow: none;

    opacity: ${(p) => (p.disabled ? '0.5' : '1')};
    cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

    transition: background, color, margin 0.2s ease-in-out;

    strong {
      color: ${(p) => (p.selected ? theme.colors.white : theme.colors.primary)};
      font-size: ${theme.font.sizes.large};
    }

    &:first-of-type {
      margin-right: ${(p) => (p.selected ? '-5px' : '0px')};

      border-top-right-radius: ${(p) =>
        p.selected ? theme.border.radius.medium : '0px'};
      border-bottom-right-radius: ${(p) =>
        p.selected ? theme.border.radius.medium : '0px'};

      z-index: ${(p) => (p.selected ? '1' : '0')};
    }

    &:last-of-type {
      margin-left: ${(p) => (p.selected ? '-5px' : '0px')};

      border-top-left-radius: ${(p) => (p.selected ? theme.border.radius.medium : '0px')};
      border-bottom-left-radius: ${(p) =>
        p.selected ? theme.border.radius.medium : '0px'};

      z-index: ${(p) => (p.selected ? '1' : '0')};
    }
  `}
`;
