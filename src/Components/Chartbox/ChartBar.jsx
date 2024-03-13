import { Bar, BarChart, Tooltip, } from "recharts";



const ChartBar = ({ props }) => {
    return (
        <div>
            <h1 className="text-xl text-white font-bold">{props.title}</h1>
            <div className="mt-5">

                <BarChart width={250} height={150} data={props.chartData}>
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{ fill: "none" }}
                    />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>

            </div>
        </div>
    );
};

export default ChartBar;