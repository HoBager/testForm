import { FC, ReactElement, ReactNode } from "react";

interface TabProps {
  currentIndex: number;
  index: number;
  children?: ReactNode;
}

const Tab: FC<TabProps> = ({ currentIndex, index, children }) => {
  if (currentIndex === index) {
    return <div>{children}</div>;
  }
  return <div></div>;
};

export default Tab;
