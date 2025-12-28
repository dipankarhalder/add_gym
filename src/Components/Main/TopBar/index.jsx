import { Info, Notification, Location, Darrow } from "../../../Shared/Icons";
import { SelectBox } from "../../../Shared/SelectBox";
import {
  AppMainTopCover,
  AppLocationDropDown,
  AppLoginTime,
  AppDropDownItem,
  AppMainLeftArea,
  AppMainRightArea,
} from "./style";

function getCurrentDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  hours = String(hours).padStart(2, "0");

  return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
}

export const TopBar = ({ location }) => {
  console.log(location);

  return (
    <AppMainTopCover>
      <AppMainLeftArea>
        {/* <AppLocationDropDown>
          <Location />
          <AppDropDownItem>
            <SelectBox
              placeholder="Durgapur"
              options={location}
              name={"location_dropdown"}
              id={"location_dropdown"}
            />
            <Darrow />
          </AppDropDownItem>
        </AppLocationDropDown> */}
        <AppLoginTime>
          Last login:
          <span>{getCurrentDateTime()}</span>
        </AppLoginTime>
      </AppMainLeftArea>
      <AppMainRightArea>
        <ul>
          <li>
            <Info />
          </li>
          <li>
            <Notification />
          </li>
        </ul>
      </AppMainRightArea>
    </AppMainTopCover>
  );
};
