export interface Props {
  img: string
  name: string
  state: string
}
import {
  Item,
  Title,
} from './styled'

import AngleDownIcon from '@/static/svg/angle-down.svg'

export default ({ img, name, state }: Props) => {
  return (
    <Item>
      <img src={img} alt={name} />
      <Title>
        <div>{name}</div>
        <div>{state}</div>
        <AngleDownIcon viewBox="0 0 10 16" preserveAspectRatio="xMaxYMax meet"/>
      </Title>
    </Item>
  )
}