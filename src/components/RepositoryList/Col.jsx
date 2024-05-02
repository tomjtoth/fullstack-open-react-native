import { View, StyleSheet } from "react-native"

const sx = StyleSheet.create({
  col: {
    flexGrow: 1,
    gap: 5,
  }
});

const Col = ({ style, children }) => (
  <View style={[sx.col, style]}>{children}</View>
)

export default Col;
