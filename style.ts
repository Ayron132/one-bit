import styled from 'styled-components'

import { Platform, SafeAreaView } from 'react-native'

export const SafeArea = styled(SafeAreaView)`
    display: flex;
    height: 100%;
    background-color: #000;
    align-items: center;
    padding-top: ${Platform.OS === 'android' ? "40px" : "0px"};
`