import { View, StyleSheet } from "react-native"

const sx = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    flexGrow: 1,
    gap: 10
  },
});

const Row = ({ style, children }) => (
  <View style={[sx.row, style]}>{children}</View>
)

export default Row;
