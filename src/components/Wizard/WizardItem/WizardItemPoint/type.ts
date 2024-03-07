type WizardItemPointVariantTypes = 'ACTIVE' | 'INACTIVE' | 'ERROR'

type WizardItemPointProps = {
  children: React.ReactNode
  variant?: WizardItemPointVariantTypes
  customColor?: string
}

export type { WizardItemPointProps, WizardItemPointVariantTypes }
