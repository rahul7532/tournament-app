import {
  ADD_TEAM,
  END_MATCH,
  SET_SELECTED_MATCH,
  UPDATE_MATCH_SCORE,
  GENERATE_NEW_BRACKET,
  GET_BRACKET_ROUND_MATCHS,
  UPDATE_ROUND_MATCHS,
  GET_NEXT_ROUND,
  SET_ROUND_GENERATED,
  SET_WINNING_TEAM
} from '../Constants';

export const addTeam = (team) => (
  {
    type: ADD_TEAM,
    team
  }
)

export const endMatch = (match_id) => (
  {
    type: END_MATCH,
    match_id
  }
)

export const setSelectedMatch = (match_id) => (
  {
    type: SET_SELECTED_MATCH,
    match_id
  }
)

export const updateMatchScore = (score_one, score_two, match_id) => (
  {
    type: UPDATE_MATCH_SCORE,
    payload: {
      score_one,
      score_two,
      match_id
    }
  }
)

export const generateNewBracket = (teams) => (
  {
    type: GENERATE_NEW_BRACKET,
    teams
  }
)

export const getBracketRoundMatchs = (bracket) => (
  {
    type: GET_BRACKET_ROUND_MATCHS,
    bracket
  }
)

export const updateBracketRoundMatchs = (matchs) => (
  {
    type: UPDATE_ROUND_MATCHS,
    matchs
  }
)

export const getNextRound = () => (
  {
    type: GET_NEXT_ROUND
  }
)

export const setRoundGenerated = (round_generated) => (
  {
    type: SET_ROUND_GENERATED,
    round_generated
  }
)

export const setWinningTeam = (winning_team) => (
  {
    type: SET_WINNING_TEAM,
    winning_team
  }
)
