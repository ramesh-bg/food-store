import { assets } from "../../assets/assets";
import "./AppDownload.css";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <span>
        For better experience Download <br /> Tomato App
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </span>
    </div>
  );
};

export default AppDownload;
