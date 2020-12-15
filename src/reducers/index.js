import {combineReducers} from 'redux';

import {teams} from './teams';
import {matchs} from './matchs';
import {selected_match} from './selected_match';
import {bracket} from './bracket';
import {round_generated} from './round_generated';
import {winning_team} from './winning_team';

export const rootReducer = combineReducers({
  teams,
  matchs,
  selected_match,
  bracket,
  round_generated,
  winning_team
})
