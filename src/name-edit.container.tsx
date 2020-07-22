import { connect } from "react-redux";
import { NameEditComponent } from "./name-edit.component";
import { updateUserProfileName } from "./action";
import { State } from "./reducer";

const mapStateToProps = (state: State) => ({
  username: state.userProfileState.firstname,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name: string) => dispatch(updateUserProfileName(name)),
});

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameEditComponent);
