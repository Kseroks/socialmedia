import { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { thunks } from "../../../redux/profile-reducer";
import { Input } from "antd";

interface TypeProps {
  PrevStatus: string;
  isOwner: boolean;
}

export const ProfileStatus: FC<TypeProps> = ({ isOwner, PrevStatus }) => {
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
    dispatch(thunks.UpDateStatusTc(status));
  };

  const onStatusChange = (event: any) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <>
      <div>
        {isOwner ? (
              <div>
                {!editMode && (
                  <div>
                    <h2 onDoubleClick={activatedEditMode}>
                      Status: {PrevStatus}
                    </h2>
                  </div>
                )}
              </div>
        ) : (
          <div>{<h2>Status: {PrevStatus}</h2>}</div>
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
