import React, { Fragment } from 'react'

import { ButtonQuery, ButtonText, Container, Content } from './style'
import { FlatList, ScrollView } from "react-native";
import QuotationsItems from './QuotationsItems';

type Props = {
  filterDay: (number: number) => void,
  listTransactions: Array<{
    date: string,
    valor: number
  }> | undefined
}

const QuotationList = ({ filterDay, listTransactions }: Props) => {
  return (
    <Fragment>
      <Container>
        <ButtonQuery
          onPress={() => filterDay(7)}
        >
          <ButtonText>
            7D
          </ButtonText>
        </ButtonQuery>
        <ButtonQuery
          onPress={() => filterDay(7)}
        >
          <ButtonText>
            15D
          </ButtonText>
        </ButtonQuery>
        <ButtonQuery
          onPress={() => filterDay(15)}
        >
          <ButtonText>
            1M
          </ButtonText>
        </ButtonQuery>
        <ButtonQuery
          onPress={() => filterDay(31)}
        >
          <ButtonText>
            1M
          </ButtonText>
        </ButtonQuery>
        <ButtonQuery
          onPress={() => filterDay(186)}
        >
          <ButtonText>
            6M
          </ButtonText>
        </ButtonQuery>
      </Container>
      <Content>
        <FlatList
          data={listTransactions}
          renderItem={({ item }) => {
            return <QuotationsItems item={item} />
          }}
        />
      </Content>
    </Fragment>
  )
}

export default QuotationList