import {
  SET_WINNING_TEAM
} from '../Constants';

export const winning_team = (state = null, action) => {

  switch (action.type){

    case SET_WINNING_TEAM:
      return action.winning_team;
    default:
        return state
  }

}
