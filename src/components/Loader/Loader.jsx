import { Bars } from "react-loader-spinner";

export const Loader = () => (
  <Bars
    visible={true}
    height="50"
    width="50"
    ariaLabel="bars-loading"
    wrapperStyle={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: "0 auto",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: "9999",
    }}
    wrapperClass=""
    color="#3470FF"
  />
);
