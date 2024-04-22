import { act, renderHook } from "@testing-library/react";

import { usePagenation } from "./use-pagenation";

describe("use-pagenation 훅의 동작을 테스트합니다.", () => {
  const getArray = (len: number) => Array.from(new Array(len));
  it("기본값을 테스트합니다.", () => {
    const { result } = renderHook(() => usePagenation(getArray(500)));
    expect(result.current).toMatchObject({
      firstNum: 1,
      lastNum: 10,
      startPageNum: 1,
      totalPageLength: 26,
      pagenationButtonList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      listSize: 20,
      activePage: 1,
      buttonCount: 10,
      maxLength: 500
    });
  });
  it("back 함수는 현재 페이지가 1일때 back을 수행해도 1이어야합니다.", async () => {
    const { result } = renderHook(() => usePagenation(getArray(20)));
    act(() => result.current.back());
    console.log(result.current);
    expect(result.current.activePage).toBe(1);
  });
});
