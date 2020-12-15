import Team from '../Models/Team';
import Match from '../Models/Match';

import {
  END_MATCH,
  SET_SELECTED_MATCH
} from '../Constants';

export const selected_match = (state = "", action) => {

  switch(action.type) {

    case SET_SELECTED_MATCH:
      return action.match_id;

    default:
        return state
  }

}
