import { Link } from "react-router-dom";
import { Line, LineChart, Tooltip, } from "recharts";


const Chartbox = ({ props }) => {

    return (
        <div className="border-[1px] rounded-lg p-5 h-full">
            <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col justify-center items-start gap-5">
                    <div className="flex justify-evenly">
                        {/* <img src={props.icon} alt="" /> */}
                        <span className="text-white text-xl font-bold">{props.title}</span>
                    </div>
                    <h1 className="font-bold text-white text-xl">{props.number}</h1>
                    <Link to="/" style={{ color: props.color }}>
                        View all
                    </Link>
                </div>
                <div className="chartInfo">
                    <div className="chart">
                        <LineChart width={100} height={100} data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <span
                            className="percentage text-xl font-bold"
                            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
                        >
                            {props.percentage}%
                        </span>
                        <span className="duration">this month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chartbox;