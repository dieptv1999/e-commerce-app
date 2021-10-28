import {BackTop} from "antd";
import {FaChevronUp} from "react-icons/all";

function BackTopCustom() {
  return <BackTop visibilityHeight={600} className="z-20">
    <div className="bg-white p-3 rounded-full shadow-xl flex items-center justify-center">
      <FaChevronUp />
    </div>
  </BackTop>
}

export default BackTopCustom