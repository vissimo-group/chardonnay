type WizardItemPointVariantTypes = 'ACTIVE' | 'INACTIVE' | 'ERROR'

type WizardItemPointProps = {
  children: React.ReactNode
  variant?: WizardItemPointVariantTypes
}

export type { WizardItemPointProps, WizardItemPointVariantTypes }
