import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    marginTop: 48,
    fontWeight: "bold",
    fontSize: 24,
  },
  eventDate: {
    color: "#9b9b9b",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#303030",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    height: 56,
    marginRight: 12,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 42,
    marginTop: 36,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
