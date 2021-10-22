import {createStore, Reducer, Store, applyMiddleware} from "redux";

import createSagaMiddleware from "redux-saga";

import mySaga from "../saga/sagas";

interface Product {
    id: number,
    description: string,
    image: string,
    price: number,
    formatted_price: string,
    amount: number,
}

interface StateProps{
    cart: Product[],
}

const INITIAL_STATE:StateProps = {
    cart: [],
};

const Cart:Reducer<StateProps> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            const productIndex1 = state.cart.findIndex(product => product.id === action.payload.id);

            if(productIndex1 !== -1){
                state.cart[productIndex1].amount += 1;

                return {
                    cart: [...state.cart]
                };
            }

            return {
                cart: [...state.cart, {...action.payload, amount: 1}]
            };
        case "REMOVE_PRODUCT":
            const productIndex2 = state.cart.findIndex(product => product.id === action.payload.id);

            if(state.cart[productIndex2].amount !== 1){
                state.cart[productIndex2].amount -=1;
            }

            return {
                cart: [...state.cart]
            };
        case "DELETE_PRODUCT":
            const productIndex3 = state.cart.findIndex(product => product.id === action.payload.id);

            state.cart.splice(productIndex3, 1);

            return {
                cart: [...state.cart]
            };
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store:Store<StateProps> = createStore(Cart, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;