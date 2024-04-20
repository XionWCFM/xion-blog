import { renderHook } from "@testing-library/react";

import { usePagenation } from "./use-pagenation";

describe("", () => {
  it("", () => {
    const { result } = renderHook(() => usePagenation(["hello", "world"]));
    const value = result.current;
    console.log(value);
    expect(true).toBe(true);
  });
});
