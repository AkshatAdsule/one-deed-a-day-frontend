import React, { ReactElement } from 'react';

export interface Props {
  link: { name: string; url: string; active?: boolean };
}

function NavItem(props: Props): ReactElement {
  return (
    <li className="nav-item">
      <a className={`nav-link ${props.link.active && 'active'}`} href={props.link.url}>
        {props.link.name}
      </a>
    </li>
  );
}

export default NavItem;
