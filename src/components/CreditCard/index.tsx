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
  textColor = '#707070',
  cardNumber = '**** **** **** ****',
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
            <CardContainerContentText $textColor={textColor}>
              {cardNumber}
            </CardContainerContentText>
          </CardContainerContent>

          <CardContainerFooter $textColor={textColor}>
            <CardContainerFooterSpan>{name}</CardContainerFooterSpan>
            <CardContainerFooterSpan>{date}</CardContainerFooterSpan>
          </CardContainerFooter>
        </CardContainerFront>
      )}
    </CardContainer>
  )
}

export { CreditCard }
