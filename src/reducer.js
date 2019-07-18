// import { default as userReducer } from './user';
// import { default as boxReducer } from './user';

// export default ({ box, user }, action) => {

//   return {
//     box: boxReducer(box, action),
//     user: userReducer(user, action)  
//   };
// };

export const initialState = {
  theme: { primary: 'green' },
  name: 'marco',
  items: [],
  canvas: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };
    case 'updateName':
      return {
        ...state,
        name: action.name
      };
    case 'setCanvas': 
      return {
        ...state,
        canvas: action.canvas
      }
    case 'addItem': 
      return {
        ...state,
        items: [...state.items, action.item]
      }
      
    default:
      return state;
  }
};