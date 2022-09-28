import { ADD_EMAIL } from "../actions";

const INITIAL_STATE = {
    emailGlobal: '',
    lista: [],
}

function loginReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
     case ADD_EMAIL:
        return {
            ...state,
            emailGlobal: action.email,
        }
      default:
        return state;
    }
}

// o spread acima e sempre feito quando a mais de uma chave no initial_State. Lenbrando que a função a funcção do spread e espalhar
// os elementos do objeto e adicionar um novo senão ele sobreescreve a estado anterior.

export default loginReducer;
