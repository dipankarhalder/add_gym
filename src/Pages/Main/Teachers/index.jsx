import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import teacherData from "../../../data/trainer.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Trainers", path: "/" },
];

export const TeachersPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const teacherTableData =
    teacherData &&
    teacherData.map((item) => ({
      id: item.trainer_id,
      name: item.name,
      gender: item.gender,
      specialization: item.specialization,
      exp: `${item.experience_years} yrs`,
      certification: item.certification,
      street: item.address.street,
      city: item.address.city,
      state: item.address.state,
      pincode: item.address.pincode,
    }));

  const tableHeaders =
    teacherTableData.length > 0
      ? Object.keys(teacherTableData[0]).filter((key) => key !== "image")
      : [];

  const [visibleColumns, setVisibleColumns] = useState(() =>
    tableHeaders.reduce((acc, col) => {
      acc[col] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleColumns((prev) => ({
        ...prev,
        id: false,
        street: false,
        certification: false,
        pincode: false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <TableInfo
          pageTitle={"Manage Trainers"}
          pagePath={pagePaths}
          data={teacherTableData}
          addTextItem={"Add Trainer"}
          handleAddItems={handleAddItems}
          sortableColumns={["name", "gender", "city", "state"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["gender", "city", "state"]}
          visibleColumns={visibleColumns}
          onToggleColumn={(col) =>
            setVisibleColumns((prev) => ({
              ...prev,
              [col]: !prev[col],
            }))
          }
          onAction={handleBtnAction}
        />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};
