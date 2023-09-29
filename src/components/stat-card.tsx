import { Card } from "react-bootstrap";

export default function StatCard(props: any) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{props.label}</Card.Title>
				<Card.Text>
					{props.value} {props.unit}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
