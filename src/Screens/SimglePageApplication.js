import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import PageHolder from "./SubScreens/PageHolder";
import Spacer from "../Components/Spacer";

const SimglePageApplication = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "black",
        }}
      >
        <div style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
          <Header />
          <Spacer height={20} />
          <PageHolder />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default SimglePageApplication;
