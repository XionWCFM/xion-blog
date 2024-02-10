export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  if (window?.navigator?.clipboard) {
    try {
      await window?.navigator?.clipboard?.writeText(text);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};
