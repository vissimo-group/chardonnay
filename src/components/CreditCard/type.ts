type CreditCardProps = {
  name?: string
  nameColor: string
  date?: string
  isFlipped?: boolean
  CardBanner?: React.ReactNode
  logoCard?: React.ReactNode
  backgroundCardColor?: string
  children: React.ReactNode
  newCreditCard?: boolean
  cardNumber?: string
  cardNumberColor?: string
}

export type { CreditCardProps }
