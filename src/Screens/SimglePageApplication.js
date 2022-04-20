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
        <div style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}>
          <Header />
          <Spacer height={20} />
          <PageHolder />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default SimglePageApplication;
