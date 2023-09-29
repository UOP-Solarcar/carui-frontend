"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { useAtom } from "jotai";
import { addrAtom } from "@/../store";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Chart from "@/components/data-chart";
import StatCard from "@/components/stat-card";
import axios from 'axios';

export default function Home() {

	const [speed, setSpeed] : [any, any] = useState(20);

	return (
		<>
			<Container fluid>
				<Row>
					<Col sm={4}>
						<StatCard label={"Speed"} value={speed} unit={"Km/s"}/>
						<StatCard label={"Speed"} value={speed} unit={"Km/s"}/>
						<StatCard label={"Speed"} value={speed} unit={"Km/s"}/>
					</Col>
					<Col>
						<Row>
							<Col>
								<Chart
									name={`Test Chart`}
									data={[
										{
											x: 0.2,
											y: 200,
										},
										{
											x: 0.3,
											y: 400,
										},
										{
											x: 0.5,
											y: 600,
										},
									]}
								></Chart>
							</Col>
							<Col>
								<Chart
									name={`Test Chart`}
									data={[
										{
											x: 0.2,
											y: 200,
										},
										{
											x: 0.3,
											y: 400,
										},
										{
											x: 0.5,
											y: 600,
										},
									]}
								></Chart>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
