import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "@/components/listing-item";

const inter = Inter({ subsets: ["latin"] });

export async function fetcher(url: string): Promise<any> {
	return new Promise<any>((resolve, reject) => {
		try {
			axios.get(url).then((entry) => {
				if (entry.status == 200) {
					resolve(entry.data);
				} else {
					reject(new Error("Well shit!"));
				}
			});
		} catch (e) {
			console.log(e);
		}
	});
}

export default function Home() {
	const [monitor, setMonitor]: [any, any] = useState([]);
	const [chart, setChart]: [any, any] = useState([]);

	useEffect(() => {
		setInterval(() => {
			let ip: string | null = localStorage.getItem("ip_addr");
			if (ip != null) {
				if (ip.length == 0) console.log("Not Ready!");
				else
					fetcher(ip).then((val) => {
						let cat: JSX.Element[] = [];
						let item: JSX.Element[] = [];
						let last_cat: string = val.data.delta[0].category;

						item.push(<ListItem label={val.data.delta[0].label} value={Math.round(val.data.delta[0].value)}></ListItem>)
						for(let i = 1; i < val.data.delta.length; i++)
						{
							if (val.data.delta[i].category != last_cat)
							{
								cat.push(<><ListItem label={last_cat} value={item}/></>)
								item = [];
							}

							item.push(<ListItem label={val.data.delta[i].label} value={Math.round(val.data.delta[i].value)}/>);
							last_cat = val.data.delta[i].category;
						}
						cat.push(<><ListItem label={last_cat} value={item}/></>)
						setMonitor(cat);

						
					});
			}
		}, 6000);
	}, [monitor]);

	return (
		<>
			<Container fluid>
				<Row>
					<Col xs lg="4">
						{monitor}
					</Col>
					<Col>{chart}</Col>
				</Row>
			</Container>
		</>
	);
}
