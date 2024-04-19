import styled from 'styled-components'
import { Colors } from '../../tokens'

const CardContainer = styled.div<{
  $backgroundCardColor?: string
  $newCreditCard?: boolean
}>`
  max-width: 267px;
  width: 100%;
  height: 165px;
  background-color: ${(props) =>
    props.$backgroundCardColor || Colors.light.action.action500};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.$newCreditCard
      ? Colors.dark.neutral.neutral400
      : Colors.light.neutral.neutral100};

  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const CardContainerFront = styled.div``

const CardContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 16px 16px 0 16px;

  &:before {
    content: '';
    position: absolute;
    height: 300px;
    width: 250px;
    border-radius: 100% 100% 100% 100% / 100% 100% 100% 100%;
    background-color: hsl(0, 0%, 100%, 0.15);
    top: 55px;
    left: 107px;
    bottom: 140px;
  }
`

const CardContainerContent = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
`

const CardContainerContentText = styled.div<{
  $newCreditCard?: boolean
}>`
  color: ${(props) =>
    props.$newCreditCard
      ? Colors.dark.neutral.neutral400
      : Colors.light.neutral.neutral100};
  font-size: 14px;
`

const CardContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 24px 16px;
`

const CardContainerFooterSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-top: 15px;
`

const CardContainerHeaderitems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`

const CardContainerHeaderitemsFlipped = styled.div``

const CardContainerHeaderBlackLine = styled.div`
  padding: 0px;
  margin-top: 24px;
  background-color: ${Colors.dark.neutral.neutral600};
  width: 100%;
  height: 32px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 300px;
    width: 250px;
    transform: translate(-70%);
    border-radius: 100% 100% 100% 100% / 100% 100% 100% 100%;
    background-color: hsl(0, 0%, 100%, 0.15);
    top: 32px;
    left: 70px;
    bottom: 140px;
  }
`

const CardContainerContentBackCard = styled.div`
  width: 184px;
  height: 18px;
  border-radius: 2px;
  background-color: ${Colors.light.neutral.neutral100};
  margin: 0 auto;
  position: relative;

  &:before {
    content: '***';
    position: absolute;
    color: ${Colors.light.brand.brand100};
    right: 0;
    font-size: 20px;
    padding: 2px 4px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 93%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 5px solid ${Colors.light.action.action100};
    background-color: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    padding: 16px;

    background-color: transparent;
    border: 10px solid ${Colors.light.action.action100};
  }
`

export {
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
}