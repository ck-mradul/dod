import React from "react";
import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const data = {
  categories: [
    { title: "Catalog Home" },
    { title: "Summer Picks" },
    { title: "Back-to-School" },
    { title: "Bestsellers" },
    { title: "New Arrivals" },
    { title: "Eco-friendly" },
    { title: "AOP Clothing" },
    { title: "Assembled in the USA" },
    { title: "Neck Labels" },
    { title: "TikTok Ready" },
  ],
  men: [
    "T-shirts",
    "Hoodies",
    "Sweatshirts",
    "Long Sleeves",
    "Tank Tops",
    "Sportswear",
    "Bottoms",
    "Swimwear",
    "Shoes",
  ],
  women: [
    "T-shirts",
    "Hoodies",
    "Sweatshirts",
    "Long Sleeves",
    "Tank Tops",
    "Sportswear",
    "Bottoms",
    "Swimwear",
    "Shoes",
  ],
  kids: [
    "T-shirts",
    "Hoodies",
    "Sweatshirts",
    "Long Sleeves",
    "Tank Tops",
    "Sportswear",
    "Bottoms",
    "Swimwear",
    "Shoes",
  ],
};

const CustomMenu = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        padding: "20px",
        minWidth: "800px",
        gap: "20px",
      }}
      className="bg-white shadow-md mt-16 !p-8"
    >
      <div className="px-10">
        <h3 style={{ fontWeight: "bold" }} className="border-b-2 pb-3">
          Categories
        </h3>
        {data.categories.map((category, index) => (
          <h3
            key={index}
            style={{ fontWeight: "bold" }}
            className="border-b-2 py-3 cursor-pointer"
          >
            {category.title}
          </h3>
        ))}
      </div>
      <div className="px-10">
        <h3 style={{ fontWeight: "bold" }}>{`Men's Clothing`}</h3>
        {data.men.map((item, index) => (
          <p key={index} style={{ margin: 0 }} className="py-2 cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="px-10">
        <h3 style={{ fontWeight: "bold" }}>{`Women's Clothing`}</h3>
        {data.women.map((item, index) => (
          <p key={index} style={{ margin: 0 }} className="py-2 cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="pl-10">
        <h3 style={{ fontWeight: "bold" }}>{`Kids' Clothing`}</h3>
        {data.kids.map((item, index) => (
          <p key={index} style={{ margin: 0 }} className="py-2 cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const CategoriesButton: React.FC = () => {
  return (
    // <Dropdown
    //   overlay={<CustomMenu />}
    //   trigger={["click"]}
    //   placement="bottomLeft"
    // >
    //   <Button
    //     type="primary"
    //     icon={<MenuOutlined />}
    //     className="mr-3 !shadow-none"
    //     size="large"
    //   >
    //     Categories
    //   </Button>
    // </Dropdown>
    "test"
  );
};

export default CategoriesButton;
