import { View, StyleSheet } from "react-native"

const sx = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    flex: 1,
    flexWrap: 'wrap',
    gap: 10
  },
});

const Row = ({ style, children }) => (
  <View style={[sx.row, style]}>{children}</View>
)

export default Row;
