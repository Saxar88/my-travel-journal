import Header from "./Header";
import Card from "./Card";
import data from "./data";
import "./App.css";

export default function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	return (
		<div>
			<Header />
			<section className="cards-list">{cards}</section>
		</div>
	);
}
