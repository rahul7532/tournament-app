import {connect} from 'react-redux';

//Import the page
import AddTeamPage from '../Components/add-team/add-team';

//Import the actions
import {addTeam} from '../Actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  addTeam: (team) => {
    dispatch(addTeam(team));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeamPage);
