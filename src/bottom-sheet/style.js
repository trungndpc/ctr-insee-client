const styles = {
  container: {
    position: "fixed",
    visibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 21,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
  },
  backgroundContainer: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  list: {
    position: "relative",
    zIndex: 2,
    listStyle: "none",
    margin: 0,
    padding: 0,
    maxHeight: '350px',
    overflow: 'hidden',
    overflowY: 'scroll',
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    paddingTop: "0px",
    transform: "translateY(0%)",
    borderRadius: "16px 16px 0px 0px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#222222",
    border: 0,
    width: "calc(100% - 32px)",
    display: "flex",
    flex: "0 1 auto",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    textTransform: "none",
    lineHeight: "56px",
    margin: "0 16px",
    borderRadius: 0,
    outline: "none",
    cursor: "pointer",
    borderBottom: "0.5px solid #E0E0E0",
  },
  text: {
    fontSize: "16px",
  },
};

export default styles;
