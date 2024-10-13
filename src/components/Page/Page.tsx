import "./Page.css";

interface Props {
  children: JSX.Element;
}

export const Page: React.FC<Props> = ({ children }) => {
  return <main className="page">{children}</main>;
};
