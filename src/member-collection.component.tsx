import React from "react";
import { MemberEntity } from "./model/member.entity";

interface Props {
  memberCollection: MemberEntity[];
  loadMemberCollection: () => void;
}

export const MemberCollectionComponent: React.FC<Props> = (props) => {
  const { memberCollection, loadMemberCollection } = props;

  return (
    <>
      <button onClick={loadMemberCollection}>load</button>
      <ul>
        {memberCollection.map((member) => (
          <li key={member.id}>{member.login}</li>
        ))}
      </ul>
    </>
  );
};
