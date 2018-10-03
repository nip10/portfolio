import styled from 'styled-components';

interface IButtonProps {
  type: string,
}

export default styled.a`
  background-color: ${(p: IButtonProps) => p.type === 'primary' ? '#8A74F7' : 'white'};
  padding: 0.8em 1em;
  color: ${(p: IButtonProps) => p.type === 'primary' ? 'white' : '#8A74F7'};
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
  text-decoration: none;
  font-size: 0.9rem;
`;