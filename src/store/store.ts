import {ActionCreator, Reducer} from "redux";

export type RootState = {
    products: Array<any>
}

const initialState: RootState = {
    products: [
        {id: 1, title: 'Лак база UNO', price: '400', grade: 4, img: 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
        {id: 2, title: 'Лак база розовый UNO', price: '300', grade: 3, img: 'https://images.unsplash.com/photo-1636019409916-37a3a8ba81a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
        {id: 3, title: 'Лак база черный UNO', price: '500', grade: 5, img: 'https://images.unsplash.com/photo-1616427593254-95ade14f7003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80'},
        {id: 4, title: 'Лак база голубой UNO', price: '340', grade: 2, img: 'https://images.unsplash.com/photo-1616427592793-67b858804534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
    ]
}

export const RootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        default:
            return initialState
    }

}
