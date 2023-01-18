import { View, Image as ImageR, Text } from 'react-native';

import styled from "styled-components"

export const Container = styled(View)`
  width: 95%;
  height: auto;
  background-color: #000;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`
export const Image = styled(ImageR)`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
export const ImageAndDate = styled(View)`
  flex-direction: row;
  align-items: center;
`
export const Date = styled(Text)`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`
export const Price = styled(View)`

`
export const PriceText = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`