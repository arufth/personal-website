import { CrabGift, NavBar, Divider } from "../";

import "./Header.css";

interface Props {
  title: string;
  subtitle: string;
}

export const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <section className="title-subtitle-cover">
        <CrabGift />
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </section>
      <NavBar />
      <Divider />
    </>
  );
};
