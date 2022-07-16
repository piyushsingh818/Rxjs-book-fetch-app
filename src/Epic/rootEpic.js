import { combineEpics } from "redux-observable"
import { booksEpicfetch } from "./booksEpic"
import { booksEpicsave } from "./booksEpic";

export const rootEpic = combineEpics(booksEpicfetch, booksEpicsave);