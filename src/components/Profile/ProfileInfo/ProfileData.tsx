import React from "react";
import { Contact } from "./Contact";

export const ProfileData: React.FC<any> = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={toEditMode}>edit</button>}</div>
      <p>{profile.aboutMe}</p>
      <p>Состояния роботи: {profile.lookingForAJob ? "Да" : "Нет"}</p>
      <p>{profile.lookingForAJobDescription}</p>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key, j) => {
          return (
            <Contact
              key={j}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};