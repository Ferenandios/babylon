import { FC } from "react";
import Logo from "./Logo/Logo";

const Header: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div>
            <Logo />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
