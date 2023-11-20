export type Severity = 'info' | 'warning' | 'error'
export type ThemeType = 'light' | 'dark'
export type Position = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'

export interface Props {
  theme: ThemeType
}

export interface PropsSeverity extends Props {
  severity: Severity
}
