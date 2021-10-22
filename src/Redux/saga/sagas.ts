import {call, put, takeEvery, select} from "redux-saga/effects";

import {toast} from "react-toastify";

import Api from "../../services/api";

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

const getCart = (state:StateProps) => state.cart;

function* getStock(action:any){
    const {data} = yield call(Api.get, `/stock/${action.payload.id}`);

    const cart:Product[] = yield select(getCart);

    const product = cart.find(product => product.id === action.payload.id);

    if(product === undefined){
        yield put({
            type: "ADD_PRODUCT",
            payload: action.payload,
        });
    }else{
        if(product.amount + 1 > data.stock){
            toast.warn('Quantidade solicitada fora de estoque!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
            });
        }else{
            yield put({
                type: "ADD_PRODUCT",
                payload: action.payload,
            });
        }
    }
}

function* mySaga(){
    yield takeEvery("CHECK_STOCK", getStock);
}

export default mySaga;