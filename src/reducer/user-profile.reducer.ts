import { actionsIds } from '../common/action-id';
import { ActionBase } from '../common/base';

export interface UserProfileState {

    firstname: string;
    lastname: string;
}

const defaultUserState = (): UserProfileState => ({
    firstname: "John Doe",
    lastname: "Naukas"
});

export const userProfileReducer = (
    state: UserProfileState = defaultUserState(),
    action: ActionBase
): UserProfileState => {
    switch (action.type) {
        case actionsIds.UPDATE_USERPROFILE_NAME:
            return handleUserProfileAction(state, action.payload)
    }
    return state;
};

const handleUserProfileAction = (state: UserProfileState, firstname: string): UserProfileState => ({
    ...state,
    firstname,
});

