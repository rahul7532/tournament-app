import Team from '../Models/Team';

import {ADD_TEAM} from '../Constants';

export const teams = (state = [
  new Team("Wildcats", null),
  new Team("Yankees", null),
  new Team("Cubs", null),
  new Team("Stealers", null)
], action) => {

  switch(action.type) {

    case ADD_TEAM:
      var team = action.team;
      var teams = [...state];
      teams.push(team);
      return teams;

    default:
        return state
  }

}
