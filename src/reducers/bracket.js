import {
  GENERATE_NEW_BRACKET,
  UPDATE_ROUND_MATCHS,
  GET_NEXT_ROUND
} from '../Constants';

import Bracket from '../Models/Bracket';

export const bracket = (state = null, action) => {

  let new_bracket;

  switch(action.type) {

    case GET_NEXT_ROUND:

      new_bracket = Object.assign(Object.create(Object.getPrototypeOf(state)), state);
      new_bracket.startNextRound();
      return new_bracket;

    case UPDATE_ROUND_MATCHS:

      let {matchs} = action;

      new_bracket = Object.assign(Object.create(Object.getPrototypeOf(state)), state);

      new_bracket.rounds_list[new_bracket.current_round - 1] = matchs;

      return new_bracket;

    case GENERATE_NEW_BRACKET:

      var bracket = new Bracket(action.teams);
      return bracket;

    default:
        return state
  }

}
