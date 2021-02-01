import { TButtonAppearences } from './types'

export interface IButtonProps {
  appearance?: TButtonAppearences
  label: string
  small?: boolean
  onClick?: () => void
}

export interface IButtonStyledProps {
  small?: boolean
  appearance?: TButtonAppearences
}
