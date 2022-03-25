import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
    background-color: ${props => props.theme.cardColor};
    border-radius: 4px;
    padding: 12px 8px;
    margin-bottom: 4px;
`;

interface IDragabbleCardProps {
    index:number;
    item:string;
}

function DragabbleCared ({item, index}: IDragabbleCardProps) {
    console.log(item + " has been rendered");
    return(
        <Draggable key={item} draggableId={item} index={index}>
            {
                (provided) => 
                    <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{item}</Card>
            }
        </Draggable>
    )
};

export default React.memo(DragabbleCared);