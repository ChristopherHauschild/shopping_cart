import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 0px ${theme.spacings.small};

    & + & {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 130px;
    height: 130px;

    border: 1px solid ${theme.border.color};
    border-radius: ${theme.border.radius.small};

    overflow: hidden;

    img {
      width: 130px;
      height: 170px;
    }
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin-left: ${theme.spacings.small};
  `}
`;

export const Name = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const Price = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.medium};
  `}
`;
