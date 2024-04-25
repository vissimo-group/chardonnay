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
  name = 'Nome Completo',
  nameColor = '#707070',
  cardNumber = '**** **** **** ****',
  cardNumberColor = '#707070',
  date = 'MM/AA',
  isFlipped = false,
  cardBanner,
  logoCard,
  backgroundCardColor = '#969696',
}: CreditCardProps) => {
  return (
    <CardContainer
      $backgroundCardColor={backgroundCardColor}
      $isFlipped={isFlipped}
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
            {cardBanner}
            {logoCard}
          </CardContainerHeader>

          <CardContainerContent>
            <CardContainerContentText $cardNumberColor={cardNumberColor}>
              {cardNumber}
            </CardContainerContentText>
          </CardContainerContent>

          <CardContainerFooter $nameColor={nameColor}>
            <CardContainerFooterSpan>{name}</CardContainerFooterSpan>
            <CardContainerFooterSpan>{date}</CardContainerFooterSpan>
          </CardContainerFooter>
        </CardContainerFront>
      )}
    </CardContainer>
  )
}

export { CreditCard }
