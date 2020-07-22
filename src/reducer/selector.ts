import { createSelector } from "reselect";
import { State } from "./index";
import { UserProfileState } from "./user-profile.reducer";

export const getUserProfileReducer = (state: State) => state.userProfileState;

export const getFullName = createSelector(
    getUserProfileReducer,
    (userProfileState: UserProfileState) => `${userProfileState.firstname} ${userProfileState.lastname}`
)



