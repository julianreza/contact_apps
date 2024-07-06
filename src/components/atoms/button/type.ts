import { FocusEventHandler, FormEventHandler, MouseEventHandler } from "react"

export type TButtonType =
  | 'primary'
  | 'secondary'
  | 'danger'

export type TButtonVariant =
  | 'filled'
  | 'outlined'

export type TButtonSize =
  | 'small'
  | 'medium'
  | 'large'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string
  types?: TButtonType
  sizes?: TButtonSize
  children?: JSX.Element | string
  type?: 'submit' | 'reset' | 'button'
  variant?: TButtonVariant
  onSubmit?: FormEventHandler<HTMLButtonElement>
  onFocus?: FocusEventHandler<HTMLButtonElement>
  onBlur?: FocusEventHandler<HTMLButtonElement>
  onClick?: MouseEventHandler<HTMLButtonElement>
}
