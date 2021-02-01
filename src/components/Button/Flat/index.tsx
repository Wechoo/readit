import React from 'react'
import { IButtonProps } from './interface'

import { Container } from './styles'

const Flat: React.FC<IButtonProps> = ({
  label,
  small = false,
  onClick,
  appearance = 'primary',
  ...rest
}: IButtonProps) => {
  return (
    <Container
      appearance={appearance}
      onClick={onClick}
      small={small}
      {...rest}
    >
      {label}
    </Container>
  )
}

export default Flat
