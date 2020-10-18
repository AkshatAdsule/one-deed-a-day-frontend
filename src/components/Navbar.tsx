import React, { ReactElement } from 'react';
import NavItem from './NavItem';

export interface Link {
  name: string;
  url: string;
  active?: boolean;
}

export interface Props {
  links: {
    linkOne: Link;
    linkTwo: Link;
    linkThree: Link;
  };
}

function Navbar(props: Props): ReactElement {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        One Deed a Day
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <NavItem link={props.links.linkOne} />
          <NavItem link={props.links.linkTwo} />
          <NavItem link={props.links.linkThree} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
