import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'semillon'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
  AccordionItem,
} from './style'
import { PurchaseSummaryAccordionProps } from './type'

export function PurchaseSummaryAccordion({
  title,
  value,
  listDiscount,
}: PurchaseSummaryAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="chevronIcon">
          {isOpen ? (
            <ChevronDown size={16} color="#1C1C1C" />
          ) : (
            <ChevronUp size={16} color="#1C1C1C" />
          )}
        </span>
        <span className="priceHeader">-{value}</span>
      </AccordionHeader>

      {isOpen && listDiscount && listDiscount.length > 0 && (
        <AccordionContent>
          <ul>
            {listDiscount.map((item) => (
              <AccordionItem key={item.id}>
                <li>{item.title}</li>
                <span className="itemValue">-R$ {item.value}</span>
              </AccordionItem>
            ))}
          </ul>
        </AccordionContent>
      )}
    </AccordionContainer>
  )
}
