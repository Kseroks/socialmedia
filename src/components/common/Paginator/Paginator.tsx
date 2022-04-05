import React, { useState } from "react";
import s from "./Paginator.module.css";

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPostChanged: (pageNumber: number) => void;
  portionSize?: number;
};

const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPostChanged,
  portionSize = 10,
}) => {
  let pageCount: number = Math.ceil(totalItemsCount / pageSize);
  let pages:Array<number> = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let portionCount: number= Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber: number= (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber: number= portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, i) => {
          return (
            <span
              key={i}
              className={`${currentPage === p && s.selectedPage}`}
              onClick={(event) => {
                onPostChanged(p);
              }}
            >
              <span>{p} </span>
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
