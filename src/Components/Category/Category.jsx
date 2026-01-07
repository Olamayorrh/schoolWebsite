
import "./Category.css";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import HiveOutlinedIcon from "@mui/icons-material/HiveOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import SwitchVideoOutlinedIcon from "@mui/icons-material/SwitchVideoOutlined";

const Category = ()=>{
    
   
    
    const category = [
      {
        id: 0,
        logo: <ManageAccountsIcon sx={{ fontSize: 40 }} />,
        title: "Business management",
        color: "#78AFF2",
        backgroudColor: "#EAF6FF",
      },

      {
        id: 1,
        logo: <DesignServicesOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Arts & Design",
        color: "#FF9BAB",
        backgroudColor: "#FEF2F4",
      },
      {
        id: 2,
        logo: <EventNoteOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Personal Development",
        color: "#9CE7C4",
        backgroudColor: "#EEFBF5",
      },
      {
        id: 3,
        logo: <HiveOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "UI/UX Design",
        color: "#FAD27A",
        backgroudColor: "#FFFAEF",
      },
      {
        id: 4,
        logo: <HubOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Graphic Design",
        color: "#885DE0",
        backgroudColor: "#F7F3FF",
      },
      {
        id: 5,
        logo: <CampaignOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Digital Marketing",
        color: "#E17AB2",
        backgroudColor: "#FFF0F8",
      },
      {
        id: 6,
        logo: <VerifiedOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Exclusive Man",
        color: "#3745CB",
        backgroudColor: "#F3F4FE",
      },
      {
        id: 7,
        logo: <DevicesOtherOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Product Design",
        color: "#E8AA6C",
        backgroudColor: "#FFF7EF",
      },
      {
        id: 8,
        logo: <SwitchVideoOutlinedIcon sx={{ fontSize: 40 }} />,
        title: "Video & Photography",
        color: "#52C5F4",
        backgroudColor: "#F1FBFF",
      },
    ];
    return (
      <>
        <div className="categories">
            <h2>Browse By Categories</h2>
            <div className="cardHouse">
                {category.map((cat) => {
                return (
                  <div
                    key={cat.id}
                    className="card"
                    style={{
                      backgroundColor: ` ${cat.backgroudColor}`,
                      "--border-color": `${cat.color}`
                    }}
                   
                  >
                    <div
                      className="Logo"
                      style={{ border: `1px solid ${cat.color}` }}
                    >
                      <div className="logo" style={{ color: `${cat.color}` }}>
                        {" "}
                        {cat.logo}{" "}
                      </div>
                    </div>
                    <div>{cat.title}</div>
                  </div>
                );
                })}
            </div>
        </div>
      </>
    );
};

export default Category;