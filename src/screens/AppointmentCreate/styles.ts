import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 34,
    overflow: "hidden"
  },
  selectBody: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: 64,
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight
  },
  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight
  },
  footer: {
    marginVertical: 20,
    marginTop: 56
  }
});
