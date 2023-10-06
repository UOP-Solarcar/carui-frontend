import { Card } from "react-bootstrap";

export default function ListItem(props: any) {
	return (
		<>
			<Card style={{ width: "100%" }}>
				<Card.Header>
					<Card.Title>{props.label}</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>{props.value}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
