import React from "react";
import { Contact } from "./Contact";
import { Button } from 'antd';

export const ProfileData: React.FC<any> = ({ profile, isOwner, toEditMode }) => {
  // debugger
  return (
    <div>
      <h3>Про Мене: {profile.aboutMe}</h3>
      <h3>Состояния роботи: {profile.lookingForAJob ? "YES" : "NO"}</h3>
      <h3>Skills: {profile.lookingForAJobDescription}</h3>
      <div>
        <h3>Contacts:</h3>
        {Object.keys(profile.contacts).map((key)  => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      <div>{isOwner && <Button onClick={toEditMode}>Edit</Button>}</div>
    </div>
  );
};