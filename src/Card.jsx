export default function Card(props) {
	return (
		<div className="card">
			<div className="card--info">
				<img src={props.image} className="card--image" />
				<div className="card--text">
					<div>
						<img src="../src/images/pointer.png" className="card--pointer" />
						<span className="card--location">{props.location}</span>
						<span>
							<a href="{props.link}" className="card--link">
								View on Google Maps
							</a>
						</span>
					</div>
					<h1 className="card--title">{props.title}</h1>
					<p className="card--date">{props.date}</p>
					<p className="card--description">{props.description}</p>
				</div>
			</div>
			<hr />
		</div>
	);
}
