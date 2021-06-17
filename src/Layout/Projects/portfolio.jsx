const Portfolio = ({ title }) => {
	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Warning: Infinite recursion depth</h2>
				<iframe
					src="https://ryankirkpatrick.net"
					title="Portfolio website"
				></iframe>
			</article>
		</>
	);
};

export default Portfolio;
