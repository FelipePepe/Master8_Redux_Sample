import { actionsIds } from "../common/action-id";
import { MemberEntity } from "../model/member.entity";
import { ActionBase } from "../common/base";

export type MembersState = MemberEntity[];

export const memberReducer = (
    state: MembersState = [],
    action: ActionBase
): MembersState => {
    switch (action.type) {
        case actionsIds.MEMBER_REQUEST_COMPLETED:
            return handleMemberRequestCompletedAction(state, action.payload);
    }

    return state;
};

const handleMemberRequestCompletedAction = (
    state: MembersState,
    members: MembersState
) => members;