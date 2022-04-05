import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ followingInProgress, UnFollowTc, FollowTc, users, totalUsersCount, pageSize, onPostChanged, currentPage }) => {

  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPostChanged={onPostChanged}
        currentPage={currentPage} />

      {users.map((user, i) =>
      (<User
        user={user}
        key={i}
        followingInProgress={followingInProgress}
        UnFollowTc={UnFollowTc}
        FollowTc={FollowTc} />))}
    </div>
  );
};

export default Users;