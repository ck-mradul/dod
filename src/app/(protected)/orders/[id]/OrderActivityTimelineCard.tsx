import { Card, Timeline } from "antd";
import { label } from "yet-another-react-lightbox";

const OrderActivityTimeline = (props: {
  timeLineData: any;
  selectedItem: any;
}) => {
  const { timeLineData, selectedItem } = props;

  console.log("selectedItem", selectedItem);
  console.log("timeLineData", timeLineData);

  const items = timeLineData?.map(
    (item: {
      message: string;
      id: string | number | undefined;
      created_at: string | number | Date;
      type: number;
      updated_value: any;
    }) => {
      const color = item.type === 2 ? "red" : "blue";

      const cardStyle = {
        borderLeft: item.type === 2 ? "3px solid #ff4d4f" : "3px solid #1890ff",
        backgroundColor: item.type === 2 ? "#fff1f0" : "#e6f7ff",
        width: "calc(100% - 20px)",
        margin: "0px",
      };

      return {
        color: color,
        children: (
          <Card
            style={cardStyle}
            className={` ${item.message.includes("deleted") ? "deleted" : ""} `}
          >
            {item.message.split("\n").map((line: any, index: number) => (
              <div
                key={index}
                style={{
                  ...(index === 1 || index === 2
                    ? { insetInlineStart: "20%" }
                    : {}),
                  ...(index === 3
                    ? { insetInlineStart: "25%", width: "70%" }
                    : {}),
                }}
              >
                <h5 className="text-gray-500 font-normal leading-relaxed">
                  {selectedItem?.name}
                </h5>
                <strong
                  key={index}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </div>
            ))}
            {item.updated_value && (
              <div style={{ marginTop: "8px", fontWeight: "normal" }}>
                <div>
                  {Object.entries(JSON.parse(item.updated_value)).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        style={{ display: "flex", marginBottom: "4px" }}
                      >
                        <div style={{ marginRight: "8px" }}>{key}:</div>
                        <span>{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </Card>
        ),
        label: (
          <div
            style={{
              textAlign: "left",
              color: "#999",
            }}
          >
            {new Date(item.created_at).toLocaleString()}
          </div>
        ),
      };
    }
  );

  return <Timeline items={items} mode="left" />;
};

export default OrderActivityTimeline;
