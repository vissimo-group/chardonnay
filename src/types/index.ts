export type Severity = 'info' | 'warning' | 'error'
export type ThemeType = 'light' | 'dark'
export type Position = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'

export interface CommomProps {
  theme: ThemeType
}

export interface PropsSeverity extends CommomProps {
  severity: Severity
}
