import { ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props }: ButtonProps): JSX.Element => {
  return <ButtonContainer {...props} />
}

export default Button
