import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'semillon'
import {
  PurchaseSummaryAccordionAccordionContainer,
  PurchaseSummaryAccordionAccordionHeader,
  PurchaseSummaryAccordionAccordionContent,
  PurchaseSummaryAccordionAccordionItem,
  PurchaseSummaryAccordionPriceHeader,
  PurchaseSummaryAccordionchevronIcon,
  PurchaseSummaryAccordionItemValue,
  PurchaseSummaryAccordionAccordionTitle,
  PurchaseSummaryAccordionAccordionSpanTitle,
  PurchaseSummaryAccordionAccordionUlItens,
} from './style'
import { PurchaseSummaryAccordionProps } from './type'

export function PurchaseSummaryAccordion({
  title,
  total,
  listDiscount,
}: PurchaseSummaryAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <PurchaseSummaryAccordionAccordionContainer>
      <PurchaseSummaryAccordionAccordionHeader onClick={toggleAccordion}>
        <PurchaseSummaryAccordionAccordionSpanTitle>
          {title}
        </PurchaseSummaryAccordionAccordionSpanTitle>
        <PurchaseSummaryAccordionchevronIcon>
          {isOpen ? (
            <ChevronDown size={16} color="#1C1C1C" />
          ) : (
            <ChevronUp size={16} color="#1C1C1C" />
          )}
        </PurchaseSummaryAccordionchevronIcon>
        <PurchaseSummaryAccordionPriceHeader>
          {total}
        </PurchaseSummaryAccordionPriceHeader>
      </PurchaseSummaryAccordionAccordionHeader>

      {isOpen && listDiscount && listDiscount.length > 0 && (
        <PurchaseSummaryAccordionAccordionContent>
          <PurchaseSummaryAccordionAccordionUlItens>
            {listDiscount.map((item) => (
              <PurchaseSummaryAccordionAccordionItem key={item.id}>
                <PurchaseSummaryAccordionAccordionTitle>
                  {item.title}
                </PurchaseSummaryAccordionAccordionTitle>
                <PurchaseSummaryAccordionItemValue>
                  {item.price}
                </PurchaseSummaryAccordionItemValue>
              </PurchaseSummaryAccordionAccordionItem>
            ))}
          </PurchaseSummaryAccordionAccordionUlItens>
        </PurchaseSummaryAccordionAccordionContent>
      )}
    </PurchaseSummaryAccordionAccordionContainer>
  )
}
