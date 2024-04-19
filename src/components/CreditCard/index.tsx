import {
  CardContainer,
  CardContainerFront,
  CardContainerHeader,
  CardContainerContent,
  CardContainerContentText,
  CardContainerFooter,
  CardContainerFooterSpan,
  CardContainerHeaderitems,
  CardContainerHeaderitemsFlipped,
  CardContainerHeaderBlackLine,
  CardContainerContentBackCard,
} from './style'
import { CreditCardProps } from './type'

const CreditCard = ({
  name,
  date,
  isFlipped,
  CardBanner,
  logoCard,
  backgroundCardColor,
  children,
  newCreditCard,
}: CreditCardProps) => {
  return (
    <CardContainer
      $backgroundCardColor={backgroundCardColor}
      $newCreditCard={newCreditCard}
    >
      {isFlipped ? (
        <CardContainerHeaderitems>
          <CardContainerHeaderitemsFlipped>
            <CardContainerHeaderBlackLine />
          </CardContainerHeaderitemsFlipped>
          <CardContainerHeaderitemsFlipped>
            <CardContainerContentBackCard />
          </CardContainerHeaderitemsFlipped>
        </CardContainerHeaderitems>
      ) : (
        <CardContainerFront>
          <CardContainerHeader>
            {CardBanner}
            {logoCard}
          </CardContainerHeader>

          <CardContainerContent>
            <CardContainerContentText $newCreditCard={newCreditCard}>
              {children}
            </CardContainerContentText>
          </CardContainerContent>

          <CardContainerFooter>
            <CardContainerFooterSpan>{name}</CardContainerFooterSpan>
            <CardContainerFooterSpan>{date}</CardContainerFooterSpan>
          </CardContainerFooter>
        </CardContainerFront>
      )}
    </CardContainer>
  )
}

export { CreditCard }
