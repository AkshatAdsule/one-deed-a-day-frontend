import React, { ReactElement } from 'react';

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

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a
							className={`nav-link ${
								props.links.linkOne.active && 'active'
							}`}
							href={props.links.linkOne.url}>
							{props.links.linkOne.name}
						</a>
					</li>
					<li className="nav-item">
						<a
							className={`nav-link ${
								props.links.linkTwo.active && 'active'
							}`}
							href={props.links.linkTwo.url}>
							{props.links.linkTwo.name}
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href={props.links.linkThree.url}>
							{props.links.linkThree.name}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
