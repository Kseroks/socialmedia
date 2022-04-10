import React, { useState } from "react";
import s from "./Paginator.module.css";

interface PropsType {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPostChanged: (pageNumber: number) => void;
  portionSize?: number;
}

export const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPostChanged,
  portionSize = 10,
}) => {
  const [portionNumber, setPortionNumber] = useState(1);
  const pages: Array<number> = [];

  let pageCount: number = Math.ceil(totalItemsCount / pageSize);

  for (let i = 1; i <= pageCount; i++) {pages.push(i);}

  let portionCount: number = Math.ceil(pageCount / portionSize);
  let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber: number = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => {setPortionNumber(portionNumber - 1);}}>
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, i) => {
          return (
            <span className={`${currentPage} === p && ${s.selectedPage}`}
              key={i} onClick={() => {onPostChanged(p);}}>
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
