import { connect } from "react-redux";
import { State } from "./reducer";
import { HelloComponent } from "./hello.component";

import { getFullName } from "./reducer/selector";

const mapStateToProps = (state: State) => {
  return {
    //username: state.userProfileState.firstname,
    username: getFullName(state),
  };
};

const mapDispatchToProps = (dispatch) => ({});

export const HelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloComponent);
