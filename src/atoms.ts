import { atom, selector } from "recoil";

interface IToDoState {
    [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
    key:"todo",
    default: {
        "To Do": ["a", "e"],
        doing: ["b", "c", "e", "z", "1"],
        done: ["d"]
    }
})