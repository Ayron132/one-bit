import React from 'react'

import { Container, Price, TextPrice } from './style'

type Props = {
  lastQuotation: number | undefined
}

const CurrentPrice = (lastQuotation: Props) => {
  return (
    <Container>
      <Price>
        $ {!lastQuotation && lastQuotation}
      </Price>
      <TextPrice>
        ultima cotação
      </TextPrice>
    </Container>
  )
}

export default CurrentPrice