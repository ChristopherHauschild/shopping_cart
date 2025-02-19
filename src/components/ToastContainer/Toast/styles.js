import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypeVariations = {
  success: css`
    background: #ffffff;
    color: #39c560;
  `,
  error: css`
    background: #ffffff;
    color: #eb5757;
  `,
};

export const Container = styled(animated.div)`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type]}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

export const Button = styled.button`
  position: absolute;
  right: 16px;
  top: 18px;
  opacity: 0.6;
  border: 0;
  background: transparent;
  color: inherit;
`;
