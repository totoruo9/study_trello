import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./Components/Board";


const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 100%;
gap: 8px;
`;


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info:DropResult) => {
    console.log(info);
    const {source, destination, draggableId} = info;
    if(!destination) return;

    if(source.droppableId === destination.droppableId) {
      //Same Board movement.
      setToDos(prev => {
        const boardCopy = [...prev[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);

        return {
          ...prev,
          [source.droppableId] : boardCopy
        };
      });
    };
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map(boardId => <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />)}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
