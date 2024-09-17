
import { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface IDragAndDropProvider {
    children:ReactNode
}

export const DragAndDropProvider = ({children}:IDragAndDropProvider) => {
  return (
    <DndProvider backend={HTML5Backend}>
        {children}
    </DndProvider>
  )
}
