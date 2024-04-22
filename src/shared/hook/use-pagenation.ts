import { useState } from "react";

type PagenationConfigType = {
  value?: number;
  onValueChange?: (num: number | ((num: number) => void)) => void;
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
  const [localActivePage, setLocalActivePage] = useState(
    config?.initialActivePage ?? DEFAULT_ACTIVE_PAGE
  );

  const activePage = config?.value ?? localActivePage;
  const setActivePage = config?.onValueChange ?? setLocalActivePage;
  const listSize = config?.listSize ?? DEFAULT_LIST_SIZE;
  const buttonCount = config?.buttonCount ?? DEFAULT_BUTTON_COUNT;
  const maxLength = config?.maxLength ?? list.length;

  const startPageNum = 1;
  const totalPageLength = Math.round(maxLength / listSize) + 1;

  const firstNum = activePage - (activePage % listSize) + 1;
  const lastNum = Math.min(activePage - (activePage % listSize) + buttonCount, totalPageLength);

  const pagenationButtonList = Array.from(new Array(lastNum - firstNum + 1)).map(
    (_, idx) => firstNum + idx
  );

  const next = (nextStep = 1) => {
    setActivePage((prev) => {
      return Math.min(prev + nextStep, totalPageLength);
    });
  };
  const back = (backStep = -1) => {
    setActivePage((prev) => {
      return Math.max(prev + backStep, 1);
    });
  };
  const select = (step: number) => {
    if (step === activePage) return;
    if (step > lastNum) return;
    if (step < firstNum) return;
    return setActivePage(step);
  };
  return {
    firstNum,
    lastNum,
    startPageNum,
    totalPageLength,
    pagenationButtonList,
    listSize,
    activePage,
    buttonCount,
    maxLength,
    next,
    back,
    select
  };
};
