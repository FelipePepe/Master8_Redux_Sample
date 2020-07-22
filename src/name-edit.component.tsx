import * as React from "react";

interface Props {
  username: string;
  onChange: (name: string) => void;
}

export const NameEditComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <label>Update Name: </label>
      <input
        value={props.username}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};
