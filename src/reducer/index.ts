import { combineReducers } from "redux";
import { UserProfileState, userProfileReducer } from "./user-profile.reducer";
import { MembersState, memberReducer } from "./member.reducer";

export interface State {
    userProfileState: UserProfileState;
    memberState: MembersState;
}

export const reducers = combineReducers<State>({
    userProfileState: userProfileReducer,
    memberState: memberReducer
});
