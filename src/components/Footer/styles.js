import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const Total = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0px ${theme.spacings.small};

    strong {
      color: ${theme.colors.black};
      font-size: 25px;
    }
  `}
`;

export const FreeShipping = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

    background: ${theme.colors.inverseGreen};
    border-radius: ${theme.border.radius.small};

    span {
      color: ${theme.colors.green};
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${`calc(100% - ${theme.spacings.xlarge})`};
    padding: ${theme.spacings.xsmall} 0px;

    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius.medium};
    border: none;
    outline: none;
    box-shadow: none;

    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    strong {
      color: ${theme.colors.white};
      font-size: 25px;
    }
  `}
`;
