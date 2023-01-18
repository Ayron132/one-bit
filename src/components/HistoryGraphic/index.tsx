import React from 'react'

import { StyleSheet, View } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const HistoryGraphic = ({ infoDataGraphic }: any) => {
  return (
    <View>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" }
          }}
          data={infoDataGraphic}
        />
      </VictoryChart>
    </View>
  )
}

export default HistoryGraphic;