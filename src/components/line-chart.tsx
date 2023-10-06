import { Line } from "react-chartjs-2";
import { ChartData, CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const config = {
	plugins: {
		// show legends for our graph
		legend: {
			display: true,
		},
	},
	lineHeightAnnotation: {
		always: true,
		lineWeight: 1.5,
	},

	//   animate in
	animation: {
		duration: 1,
	},
	maintainAspectRatio: true,
	responsive: true,

	//   show the x and y scales
	scales: {
		x: { display: true },
		y: { display: true },
	},
};

export default function LineChart(props: any) {
	Chart.register(CategoryScale);

	const formatData = (data: { x: any; y: number }[]) => {
		return data.map((val) => {
			return { x: val.x.toString(), y: val.y };
		});
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
				borderCapStyle: "round",
				pointHoverBackgroundColor: "rgba(59, 130, 246, 1)",
				pointHoverBorderColor: "rgba(59, 130, 246, 1)",
				pointHoverBorderWidth: 2,
			},
		],
	};

	return <Line data={data} options={config} />;
}
