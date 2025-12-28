import { Hostel, CheckPlus, Rarrow, Logout } from "../../../Shared/Icons";
import { AppRightSideBar } from "./style";
import trainerData from "../../../data/trainer.json";

const today = new Date();
const optionsWeekday = { weekday: "long" };
const optionsDate = { day: "2-digit", month: "long", year: "numeric" };
const weekday = today.toLocaleDateString("en-GB", optionsWeekday);
const date = today.toLocaleDateString("en-GB", optionsDate);
const formattedDate = `${weekday}, ${date}`;

export const RightSideBar = () => {
  return (
    <AppRightSideBar>
      <div className="app_profile_logged_user">
        <div className="app_avt_wrapper">
          <span>
            <img src="/avt.png" alt="profile" />
          </span>
          <div className="app_avatar_info">
            <h6>Himadri C</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="app_logout">
          <Logout />
        </div>
      </div>
      <div className="app_schedule_items">
        <h2>Available Trainers</h2>
        <div className="app_schedule_list_cover">
          <h4>{formattedDate}</h4>
          <ul>
            {trainerData.map((item) => (
              <li key={item.trainer_id}>
                <div className="app_sch_time">
                  {item.avl_time.map((itm, idx) => (
                    <span key={idx}>{itm}</span>
                  ))}
                </div>
                <div className="app_sch_info">
                  <h6>{item.name}</h6>
                  <p>
                    <em className={item.desig}>{item.specialization}</em>
                  </p>
                  <div className="app_students_row">
                    <Hostel />
                    <p>
                      {item.city} - ({item.experience_years} years)
                    </p>
                  </div>
                </div>
                <div className="app_view_details">
                  <Rarrow />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppRightSideBar>
  );
};
