import Team from '../Models/Team';
import Match from '../Models/Match';
import Bracket from '../Models/Bracket';

import {
  END_MATCH,
  UPDATE_MATCH_SCORE,
  GET_BRACKET_ROUND_MATCHS
} from '../Constants';

export const matchs = (state = [
  new Match ("","")
], action) => {

  switch(action.type) {

    case GET_BRACKET_ROUND_MATCHS:

      let {bracket} = action;

      return [...bracket.getAllMatchsForCurrentRound()];

    case UPDATE_MATCH_SCORE:
      var match_id = action.payload.match_id;
      var score_one = action.payload.score_one;
      var score_two = action.payload.score_two;

      var match_idx = state.findIndex(function (element) {
        return element.id == match_id;
      })

      var new_matchs = [...state];
      var updated_match = new_matchs[match_idx];

      updated_match.score_one = score_one;
      updated_match.score_two = score_two;

      new_matchs[match_idx] = updated_match;

      return new_matchs;

    case END_MATCH:
      var match_id = action.match_id;

      var match_idx = state.findIndex(function (element) {
        return element.id == match_id;
      })

      var new_matchs = [...state];
      var updated_match = new_matchs[match_idx];

      updated_match.setWinnerByScore();

      new_matchs[match_idx] = updated_match;

      return new_matchs;
    default:
        return state
  }

}
