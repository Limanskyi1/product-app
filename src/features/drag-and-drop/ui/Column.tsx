import { productApi } from "@/shared/api/ProductApi";
import { useDrop } from "react-dnd";

interface IColumn {
  status: string;
  children: React.ReactNode;
  revalidate: () => void;
}

export function Column({ status, children ,revalidate}: IColumn) {
  const [_, drop] = useDrop(() => ({
    accept: "BOX",
    drop: async (item: { id: string }) => {
      await productApi.changeProductStatus(item.id, status.toLowerCase());
      revalidate();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop}>
      {children}
    </div>
  );
}
