import React from 'react'

import { Container, ImageAndDate, Image, Date, Price, PriceText } from './style'

type Props = {
  item: {
    date: string,
    valor: number
  }
}

const QuotationsItems = ({ item }: Props) => {
  return (
    <Container>
      <ImageAndDate>
        <Image
          source={require("../../../assets/bitcoin.png")}
        />
        <Date>{item.date}</Date>
      </ImageAndDate>
      <Price>
        <PriceText>
          $ {item.valor}
        </PriceText>
      </Price>
    </Container>
  )
}

export default QuotationsItems