import styled from 'styled-components'
import { IButtonStyledProps } from './interface'

export const Container = styled.button<IButtonStyledProps>`
  padding: 12px 24px;
  font: 600 20px 'FiraSans';
  text-align: center;
  text-decoration: none;
  border: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors['neutral-0']};
  transition: all 0.4s;

  @media (min-width: 1200px) {
    width: initial;
  }
`
