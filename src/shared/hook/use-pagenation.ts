import { useState } from "react";

type PagenationConfigType = {
  listSize?: number;
  initialActivePage?: number;
  buttonCount?: number;
  maxLength?: number;
};

const DEFAULT_LIST_SIZE = 20;
const DEFAULT_ACTIVE_PAGE = 1;
const DEFAULT_BUTTON_COUNT = 10;

export const usePagenation = <List extends Array<unknown>>(
  list: List,
  config?: PagenationConfigType
) => {
  const [listSize, setListSize] = useState(config?.listSize ?? DEFAULT_LIST_SIZE);
  const [activePage, setActivePage] = useState(config?.initialActivePage ?? DEFAULT_ACTIVE_PAGE);
  const [buttonCount, setButtonCount] = useState(config?.buttonCount ?? DEFAULT_BUTTON_COUNT);
  const [maxLength, setMaxLength] = useState(config?.maxLength ?? list.length);
  const firstNum = activePage - (activePage % listSize) + 1;
  const lastNum = activePage - (activePage % listSize) + buttonCount;
  return {
    firstNum,
    lastNum
  };
};
