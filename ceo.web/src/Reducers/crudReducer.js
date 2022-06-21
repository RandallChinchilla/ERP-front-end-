import { noAction } from "../Actions/Index.js";
import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../Types/Index.js";

export const initialState = {
  db: [],
};

export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      console.log(action.payload);

      let newData = state.db.map((el) =>
        // el.CodigoOrigenFondos === action.payload.CodigoOrigenFondos
        //   ? action.payload
        //   : el

        el[action.nameId] === action.payload.CodigoOrigenFondos
          ? action.payload
          : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      console.log(action.nameId);

      let newData = state.db.filter(
        (el) => el[action.nameId] !== action.payload
      );

      return {
        ...state,
        db: newData,
      };
    }
    case NO_DATA:
      return state;
    default:
      return state;
  }
}
