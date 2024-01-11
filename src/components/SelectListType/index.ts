import { SelectListRoot } from './SelectListRoot'
import { SelectListTitle } from './SelectListTitle'
import { SelectListSubTitle } from './SelectListSubTitle'
import { SelectListPrice } from './SelectListPrice'
import { SelectListRadio } from './SelectListRadio'
import { SelectListAction } from './SelectListAction'

const SelectListType = {
  Action: SelectListAction,
  Price: SelectListPrice,
  Radio: SelectListRadio,
  Root: SelectListRoot,
  SubTitle: SelectListSubTitle,
  Title: SelectListTitle,
}

export { SelectListType }
