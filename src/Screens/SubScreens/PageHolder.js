import { Route, Routes } from "react-router-dom";
import EventHolder from "../../Components/EventHolder";
import HomeUser from "../../Components/HomeUser";
import MessengerHolder from "../../Components/MessengerHolder";
import Spacer from "../../Components/Spacer";
import PostsScreen from "../../Screens/SubScreens/PostsScreen";
import GamesScreen from "../../Screens/SubScreens/GamesScreen";
import FAQScreen from "../../Screens/SubScreens/FAQScreen";
import GroupChat from "../../Screens/SubScreens/GroupChat";
import VideosScreen from "../../Screens/SubScreens/VideosScreen";

const PageHolder = () => {
  return (
    <div
      style={{
        padding: 10,
        display: "flex",
      }}
    >
      {/* user information */}
      <div
        style={{
          width: "20%",
        }}
      >
        <HomeUser />
        <Spacer height={20} />
        <MessengerHolder />
      </div>
      {/* routing page */}
      <Spacer width={15} />
      <div
        style={{
          flex: 1,
        }}
      >
        <Routes>
          <Route path="/" element={<PostsScreen />} />
          <Route path="/game" element={<GamesScreen />} />
          <Route path="/video" element={<VideosScreen />} />
          <Route path="/group-chat" element={<GroupChat />} />
          <Route path="/faq" element={<FAQScreen />} />
        </Routes>
      </div>
      <Spacer width={15} />
      {/* events */}
      <div
        style={{
          marginRight: 10,
          width: "25%",
        }}
      >
        <EventHolder />
      </div>
    </div>
  );
};
export default PageHolder;
