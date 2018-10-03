import styled from 'styled-components';

interface IBtnImgProps {
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
}

const padding = (top = 0, right = 0, bottom = 0, left = 0) => `${top}rem ${right}rem ${bottom}rem ${left}rem`;

export default styled.img`
  max-width: 1.5rem;
  vertical-align: middle;
  padding: ${(props: IBtnImgProps) => padding(props.top, props.right, props.bottom, props.left)};
`;