// import React, { useState } from "react";
// import { message, Tabs } from "antd";
// import {
//   DndContext,
//   DragEndEvent,
//   PointerSensor,
//   useSensor,
// } from "@dnd-kit/core"; // assuming DnD library usage
// import {
//   SortableContext,
//   arrayMove,
//   horizontalListSortingStrategy,
//   useSortable,
// } from "@dnd-kit/sortable";
// import axiosInstance from "@/axiosClient";
// import {CSS} from '@dnd-kit/utilities'

// const MovableTabs = (
//   {
//     //   items,
//     //   isFetching,
//     //   isFetched,
//     //   onDragEnd,
//     //   sensor,
//     //   handleCreateTabsClick,
//   }
// ) => {
//   const [tabIndex, setTabIndex] = useState(0);
//   interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
//     "data-node-key": string;
//   }
//   const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
//     const { attributes, listeners, setNodeRef, transform, transition } =
//       useSortable({
//         id: props["data-node-key"],
//       });

//     const style: React.CSSProperties = {
//       ...props.style,
//       transform: CSS.Translate.toString(transform),
//       transition,
//       cursor: "move",
//     };

//     return React.cloneElement(props.children as React.ReactElement, {
//       ref: setNodeRef,
//       style,
//       ...attributes,
//       ...listeners,
//     });
//   };
//   const items = [
//     {
//       key: "451",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab All has 13902 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 13902,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "All",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 13902,
//     },
//     {
//       key: "1",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab New has 18 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 18,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "New",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 18,
//     },
//     {
//       key: "2",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Assigned Designer has 11 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 11,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Assigned Designer",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 11,
//     },
//     {
//       key: "3",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Quality Analyst ",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 0,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Quality Analyst",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 0,
//     },
//     {
//       key: "4",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Waiting for approval has 683 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 683,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Waiting for approval",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 683,
//     },
//     {
//       key: "5",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Customer Approved ",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 0,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Customer Approved",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 0,
//     },
//     {
//       key: "6",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Awaiting Background has 20 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 20,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Awaiting Background",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 20,
//     },
//     {
//       key: "7",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Revision Request has 12 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 12,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Revision Request",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 12,
//     },
//     {
//       key: "9",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Shipping has 8997 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 8997,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Shipping",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 8997,
//     },
//     {
//       key: "8",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab In Production has 44 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 44,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "In Production",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 44,
//     },
//     {
//       key: "10",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Complete has 5190 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 5190,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Complete",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 5190,
//     },
//     {
//       key: "11",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Cancel has 50 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 50,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Cancel",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 50,
//     },
//     {
//       key: "12",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Artwork Issue ",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 0,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Artwork Issue",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 0,
//     },
//     {
//       key: "13",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Replacement ",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 0,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Replacement",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 0,
//     },
//     {
//       key: "14",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Vendor Issue ",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 0,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Vendor Issue",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 0,
//     },
//     {
//       key: "15",
//       label: {
//         type: {},
//         key: null,
//         ref: null,
//         props: {
//           title: "Tab Awaiting Image has 2 orders",
//           children: {
//             type: {},
//             key: null,
//             ref: null,
//             props: {
//               count: 2,
//               overflowCount: 99,
//               showZero: true,
//               offset: [20, 7],
//               color: "#17be9f",
//               children: "Awaiting Image",
//             },
//             _owner: null,
//             _store: {},
//           },
//         },
//         _owner: null,
//         _store: {},
//       },
//       orderCount: 2,
//     },
//   ];

//   const sensor = useSensor(PointerSensor, {
//     activationConstraint: { distance: 10 },
//   });

//   const onDragEnd = ({ active, over }: DragEndEvent) => {
//     if (active.id !== over?.id && over?.id) {
//       const activeIndex = items.findIndex((i) => +i.key === Number(active.id));
//       const overIndex = items.findIndex((i) => +i.key === Number(over?.id));
//       const newItems = arrayMove(items, activeIndex, overIndex);

//       const payload = {
//         tabs: newItems.map((item, index) => ({
//           tab_id: Number(item.key),
//           index: index + 1,
//         })),
//       };
//       //   setItems(newItems);
//       axiosInstance
//         .post("api/dragon-drop", payload)
//         .then((res) => {
//           message.success(res?.data?.message || "Tabs reordered successfully");
//         })
//         .catch(() => {
//           message.error("Failed to update order");
//         });
//     }
//   };
//   return (
//     <Tabs
//       size="large"
//       defaultActiveKey={`${items[0]?.key}`}
//       activeKey={`${tabIndex}`}
//       className="order-list-tabs mx-4"
//       onChange={(key) => setTabIndex(Number(key))}
//       items={items}
//       renderTabBar={(tabBarProps, DefaultTabBar) => (
//         <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
//           <SortableContext
//             items={items.map((i) => i.key)}
//             strategy={horizontalListSortingStrategy}
//           >
//             <DefaultTabBar {...tabBarProps}>
//               {(node) => (
//                 <DraggableTabNode
//                   {...node.props}
//                   key={node.key}
//                   id={`draggable_id_${node.key}`}
//                 >
//                   {node}
//                 </DraggableTabNode>
//               )}
//             </DefaultTabBar>
//           </SortableContext>
//         </DndContext>
//       )}
//     />
//   );
// };

// export default MovableTabs;
import React, { useState } from "react";
import { message, Tabs } from "antd";
import {
  DndContext,
  DragEndEvent,
} from "@dnd-kit/core"; // assuming DnD library usage
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import axiosInstance from "@/axiosClient";
import { CSS } from "@dnd-kit/utilities";

// Define types for the tab items and draggable component props outside
interface TabItem {
  key: string;
  label: React.ReactNode;
  orderCount: number;
}

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-node-key": string;
}

const MovableTabs = ({
  items = [], // Pass in items via props
  isFetching,
  isFetched,
  sensor,
  handleCreateTabsClick,
}: {
  items: TabItem[];
  isFetching: boolean;
  isFetched: boolean;
  onDragEnd: (event: DragEndEvent) => void;
  sensor: any;
  handleCreateTabsClick: () => void;
}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState<TabItem[]>(items); // Local state for managing item order

  const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id: props["data-node-key"],
      });

    const style: React.CSSProperties = {
      ...props.style,
      transform: CSS.Translate.toString(transform),
      transition,
      cursor: "move",
    };

    return React.cloneElement(props.children as React.ReactElement, {
      ref: setNodeRef,
      style,
      ...attributes,
      ...listeners,
    });
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id && over?.id) {
      const activeIndex = currentItems.findIndex((i) => i.key === active.id);
      const overIndex = currentItems.findIndex((i) => i.key === over?.id);
      const newItems = arrayMove(currentItems, activeIndex, overIndex);

      setCurrentItems(newItems); // Update state immediately on drag end

      const payload = {
        tabs: newItems.map((item, index) => ({
          tab_id: Number(item.key),
          index: index + 1,
        })),
      };

      // Send the updated order to the server
      axiosInstance
        .post("api/dragon-drop", payload)
        .then((res) => {
          message.success(res?.data?.message || "Tabs reordered successfully");
        })
        .catch(() => {
          message.error("Failed to update order");
        });
    }
  };

  if (isFetching) return <div>Loading...</div>; // Or show a spinner

  if (!isFetched) {
    return (
      <div>No data fetched</div> // Show appropriate message
    );
  }

  if (!currentItems.length) {
    return (
      <div>
        No tabs available.{" "}
        <button onClick={handleCreateTabsClick}>Manage Tabs</button>
      </div>
    );
  }

  return (
    <Tabs
      size="large"
      defaultActiveKey={`${currentItems[0]?.key}`}
      activeKey={`${tabIndex}`}
      className="order-list-tabs mx-4"
      onChange={(key) => setTabIndex(Number(key))}
      items={currentItems.map((item) => ({
        key: item.key,
        label: item.label,
      }))}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={handleDragEnd}>
          <SortableContext
            items={currentItems.map((i) => i.key)}
            strategy={horizontalListSortingStrategy}
          >
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode
                  {...node.props}
                  key={node.key}
                  id={`draggable_id_${node.key}`}
                >
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  );
};

export default MovableTabs;
