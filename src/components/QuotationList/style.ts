import styled from "styled-components";

import { View, TouchableOpacity, Text } from "react-native";

export const Container = styled(View)`
  flex-direction: row;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: space-evenly;
`
export const ButtonQuery = styled(TouchableOpacity)`
  width: 50px;
  height: 30px;
  background-color: #f50d41;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`
export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`
export const Content = styled(View)`
  width: 100%;
  padding-top: 10px;
`