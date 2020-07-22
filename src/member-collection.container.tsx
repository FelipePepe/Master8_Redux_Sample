import { connect } from "react-redux";
import { memberRequest } from "./action";

import { MemberCollectionComponent } from "./member-collection.component";
import { State } from "./reducer";

const mapStateToProps = (state: State) => ({
  memberCollection: state.memberState,
});

const mapDispatchToProps = (dispatch) => ({
  loadMemberCollection: () => dispatch(memberRequest()),
});

export const MemberCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCollectionComponent);
