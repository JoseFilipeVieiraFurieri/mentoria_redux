// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';

// ACTIONS CREATORS
export const addEmail = (email) => ({
    type: ADD_EMAIL,
    email,
  })

  // payLoad e um padrão para o parametro recebido na action, mas pode ser qualquer nome( no exemplo acima esta como email)