import * as actionTypes from "../actionTypes";


const initialAppState = {
    inputValue: 0, //入力された値
    operation: "", //演算子
    resultValue: 0, //計算結果
    dotNumber:false,//小数点
    calculate: false, //計算を行うかの判断
    showingResult: false, //結果を表示するかの判断
};

const calculator = (state = initialAppState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_NUMBER:
            if(state.dotNumber===false){
        　　　　return {
                ...state,
                inputValue: state.inputValue * 10 + action.number,
                showingResult: false,
                
                };
            }else{
                return{
                    ...state,
                    inputValue: Number(state.inputValue +"."+action.number),
                    dotNumber:false,
                    showingResult:false,
                };
            }

        case actionTypes.INPUT_DOT:
            return{
                ...state,
                dotNumber:true,
            }




        case actionTypes.PLUS:
            if (state.calculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "+",
                    resultValue: state.resultValue + state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "+",
                    calculate: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                };
            }

        case actionTypes.MINUS:
            if (state.calculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "-",
                    resultValue: state.resultValue - state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "-",
                    calculate: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                };
            }

        case actionTypes.MULTIPLY:
            if (state.calculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "*",
                    resultValue: state.resultValue * state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "*",
                    calculate: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                }
            }

        case actionTypes.DIVIDE:
            if (state.calculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "/",
                    resultValue: state.resultValue / state.inputValue,
                    showingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operation: "/",
                    calculate: true,
                    resultValue: state.inputValue,
                    showingResult: true,
                }
            }

        case actionTypes.CLEAR:
            return {
                inputValue: 0,
                operation: "",
                calculate: false,
                dotNumber:false,
                resultValue: 0,
                showingResult: false,
            };

        case actionTypes.EDIT:
            switch (state.operation) {
                case "+":
                    return {
                        inputValue: state.resultValue + state.inputValue,
                        operation: "",
                        calculate: false,
                        dotNumber:false,
                        resultValue: state.resultValue + state.inputValue,
                        showingResult: true,
                    };

                case "-":
                    return {
                        inputValue: state.resultValue - state.inputValue,
                        operation: "",
                        calculate: false,
                        dotNumber:false,
                        resultValue: state.resultValue - state.inputValue,
                        showingResult: true,
                    };
                case "*":
                    return {
                        inputValue: state.resultValue * state.inputValue,
                        operation: "",
                        calculate: false,
                        dotNumber:false,
                        resultValue: state.resultValue * state.inputValue,
                        showingResult: true,
                    };
                case "/":
                    return{
                        inputValue: state.resultValue / state.inputValue,
                        operation: "",
                        calculate: false,
                        dotNumber:false,
                        resultValue: state.resultValue / state.inputValue,
                        showingResult: true, 
                    };    

                default:
                    return state;
            }

        default:
            return state;
    }
};



export default calculator;