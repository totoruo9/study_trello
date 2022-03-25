import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
    background-color: ${props => props.theme.boardColor};
    padding: 20px 8px 4px;
    border-radius: 4px;
    width: 100%;
    min-height: 100px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
`;

const SBoard = styled.div`
    
    
    
    
`;

interface IBoardProps {
    toDos: string[],
    boardId: string;
}

function Board ({toDos, boardId}:IBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provider) => (
                    <SBoard ref={provider.innerRef} {...provider.droppableProps}>
                    {
                        toDos.map((item, index) => (
                        <DragabbleCard key={index} item={item} index={index} />
                        ))
                    }
                    {provider.placeholder}
                    </SBoard>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default Board;