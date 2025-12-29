import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import locationData from "../../../data/trainer.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Locations", path: "/" },
];

export const LocationsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const locationTableData =
    locationData &&
    locationData.map((item) => ({
      id: item.trainer_id,
      address: item.address.street,
      city: item.city,
      state: item.address.state,
      pincode: item.address.pincode,
    }));

  const tableHeaders =
    locationTableData.length > 0
      ? Object.keys(locationTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Locations"}
          pagePath={pagePaths}
          data={locationTableData}
          addTextItem={"Add Location"}
          handleAddItems={handleAddItems}
          sortableColumns={["city", "state"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["city", "state"]}
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
