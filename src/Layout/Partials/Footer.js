import React from 'react';

export default function Footer() {
	return (
		<div>
			<footer className="boxshadow">
				<ul className="updated">
					<li><cite>&copy; 2020-{new Date().getFullYear()} {process.env.REACT_APP_AUTHOR}</cite></li>
					<li id="print"><i className="material-icons" onclick="window.print(); return false" title="Opens the print dialog box.">print</i></li>
					<li><a href="#top" className="scroll" data-speed="500">Top</a></li>
				</ul>
			</footer>
		</div>
	);
}