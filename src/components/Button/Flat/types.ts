export type TButtonAppearences = 'primary' | 'secondary'

export type TAppearencesStates = {
  default: { light: string; dark?: string }
  hover?: { light: string; dark?: string }
  active?: { light: string; dark?: string }
  disabled?: { light: string; dark?: string }
  selected?: { light: string; dark?: string }
  focusSelected?: { light: string; dark?: string }
}

export const baseButtons = {
  background: {
    primary: {
      default: { light: 'red', dark: 'black' },
      hover: { light: 'black', dark: 'red' }
    }
  },
  color: {
    primary: {
      default: { light: 'white', dark: 'blue' },
      disabled: { light: '#ccc', dark: '#c9c9c9' }
    }
  }
}
