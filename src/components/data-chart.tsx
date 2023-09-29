import { Line } from "react-chartjs-2";
import { Config } from "./chart-config";
import { ChartData } from "chart.js";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

export default function DataChart(props: any) {
	Chart.register(CategoryScale);

	const formatData = (data: {x: any, y: number}[]) => {
		return data.map((val) => {
			return {x: val.x.toString(), y: val.y}
		})
	};

	const data: ChartData<"line"> = {
		datasets: [
			{
				// label for our chart
				label: `${props.name}`,
				fill: true,
				data: formatData(props.data),
				borderColor: "#3B82F6",
				backgroundColor: "rgba(59, 130, 246, 0.2)",
				borderWidth: 3,
				pointRadius: props.pointRadius,
				pointHoverRadius: 5,
				borderCapStyle: "butt",
				pointHoverBackgroundColor: "rgba(59, 130, 246, 1)",
				pointHoverBorderColor: "rgba(59, 130, 246, 1)",
				pointHoverBorderWidth: 2,
			},
		],
	};

	return (
		<div className="chart-container w-full p-2">
			<Line data={data} options={Config} />
		</div>
	);
}
