import { Avatar } from "antd";
import Link from "next/link";
import React from "react";

const SettingsCard = (
  path: string,
  icon: IconType,
  title: string,
  description: string
) => {
  return (
    <div className="col-12 col-md-6">
      {title === "Store Manager" ? (
        <Link href={`/settings/${path}`}>
          <div className="text-dark cursor-pointer">
            <div className="rounded-10 bg-white p-6 p-lg-8 d-flex align-items-center listingCard">
              <div className="iconSection">
                <Avatar
                  shape="square"
                  className="avatar"
                  style={{ borderRadius: "10px" }}
                  size={64}
                  icon={<div style={{ color: "#17BE9F" }}>{icon}</div>}
                />
              </div>
              <div className="fw-500 ps-6 ps-lg-8 contentSection">
                <h4 className="heading">{title}</h4>
                <div>{description}</div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div
          //   onClick={() => handleNavigation(path)}
          className="text-dark cursor-pointer"
        >
          <div className="rounded-10 bg-white p-6 p-lg-8 d-flex align-items-center listingCard">
            <div className="iconSection">
              <Avatar
                shape="square"
                className="avatar"
                style={{ borderRadius: "10px" }}
                size={64}
                icon={<div style={{ color: "#17BE9F" }}>{icon}</div>}
              />
            </div>
            <div className="fw-500 ps-6 ps-lg-8 contentSection">
              <h4 className="heading">{title}</h4>
              <div>{description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsCard;
