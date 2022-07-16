import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { from } from 'rxjs'
import axios from 'axios'

export const booksEpicfetch = (action$) => action$.pipe(
    ofType('FETCH'),
    mergeMap((res) => getBookdata(res)),
    map(res => ({ type: 'FETCH_BOOKS', value: res.data })
    ));

export const booksEpicsave = (action$) => action$.pipe(
    ofType('SAVE'),
    map(res => ({ type: 'SAVE_BOOKS', value: res }))
)
const getBookdata = (res) => {
    return from(
        axios({
            url: (`https://www.googleapis.com/books/v1/volumes?q=${res.value}flowers`),
            method: "get",
        })
    )
}










// export const booksEpicsave = (action$) => action$.pipe(
//     ofType('SAVE'),
//     map(action => ({ type: 'SAVE_BOOKS', value: action.value })
//     ))