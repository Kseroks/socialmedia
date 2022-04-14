import { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { UpDateStatusTc } from "../../../redux/profile-reducer";
import { Input } from 'antd';
interface TypeProps {PrevStatus: string;}

export const ProfileStatus: FC<TypeProps> = ({ PrevStatus }) => {
  const dispatch = useDispatch();

  const [editMode, SetEditMode] = useState(false);
  const [status, setStatus] = useState(PrevStatus);

  useEffect(() => {
    setStatus(PrevStatus);
  }, [PrevStatus]);

  const activatedEditMode = () => {
    SetEditMode(true);
  };

  const deactivatedEditMode = () => {
    SetEditMode(false);
    dispatch(UpDateStatusTc(status));
  };

  const onStatusChange = (event: any) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <>
    <div>
      {!editMode && (
        <div>
          <h2 onDoubleClick={activatedEditMode}>{PrevStatus}</h2>
        </div>
      )}
      {editMode && (
        <div>
          <Input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivatedEditMode}
            value={status}
          />
        </div>
      )}
      </div>
      </>
  );
};
