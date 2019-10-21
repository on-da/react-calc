import * as actionTypes from "./actionTypes";

export const onNumClick=(number)=>({
    type:actionTypes.INPUT_NUMBER,
    number,
});
export const onPlusClick=()=>({
    type:actionTypes.PLUS,
});

export const onMinusClick=()=>({
    type:actionTypes.MINUS,
});

export const onMultiplyClick=()=>({
    type:actionTypes.MULTIPLY,
});

export const onDivideClick=()=>({
    type:actionTypes.DIVIDE,
});

export const onEditClick=()=>({
    type: actionTypes.EDIT,
});

export const onClearClick=()=>({
    type:actionTypes.CLEAR,
});

export const onDotClick=()=>({
    type:actionTypes.INPUT_DOT,
});