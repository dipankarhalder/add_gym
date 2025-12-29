import { Rupees, Profile, Teams, Members } from "../../../Shared/Icons";

function formatMonthYear() {
  return new Date().toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export const Overview = () => {
  return (
    <div className="app_init_dashboard">
      <ul>
        <li>
          <div className="app_child_inside app_collection">
            <Rupees />
            <p>Revenue Overview</p>
            <div className="app_icontext">
              <h6>Rs. 9,500,010 /-</h6>
              <span>{formatMonthYear()}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_expense">
            <Rupees />
            <p>Overall Expenses</p>
            <div className="app_icontext">
              <h6>Rs. 680,230 /-</h6>
              <span>{formatMonthYear()}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_teacher">
            <Profile />
            <p>Total Trainer</p>
            <div className="app_icontext">
              <h6>749</h6>
              <span>Inactive: 126</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_non_teacher">
            <Members />
            <p>Overall Center</p>
            <div className="app_icontext">
              <h6>1260</h6>
              <span>In 12 City</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_student">
            <Teams />
            <p>Total Users</p>
            <div className="app_icontext">
              <h6>42,620</h6>
              <span>Inactive: 1034</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
