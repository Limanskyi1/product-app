import { ReactNode } from 'react';
import { useDrag } from 'react-dnd';

interface IBox {
  id: string; 
  children: ReactNode;
}

export function Box({ id, children }: IBox) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'BOX',
      item: { id, children },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [id]
  );

  return (
    <div className='drag-box' ref={dragRef} style={{ opacity }}>
      {children}
    </div>
  );
}