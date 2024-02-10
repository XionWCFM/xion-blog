import { atom, useAtom } from 'jotai';

const sideBarAtom = atom(false);

export const useSideBar = () => {
  const [isSideBarOpen, setValue] = useAtom(sideBarAtom);
  const toggleSideBar = () => {
    setValue((s) => !s);
  };
  const sideBarOnOpenChange = (bool: boolean) => {
    setValue(bool);
  };
  return { isSideBarOpen, toggleSideBar, sideBarOnOpenChange };
};
