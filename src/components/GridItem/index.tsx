import { Level } from "../../helpers/imc"

type Porps = {
  item: Level
}

export const GridItem = ({item}: Porps ) =>{
  return(
    <div>{item.title}</div>
  )
}