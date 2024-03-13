import { Cell, Pie, PieChart, Tooltip } from "recharts";
const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

const ChartPie = () => {
    return (
        <div>
            <div className="pieChartBox">
                <h1 className="text-xl text-white font-bold">Leads by Source</h1>
                <div className="chart">

                    <PieChart width={250} height={400} className="mx-auto">
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>

                </div>
                <div className="flex gap-3 justify-evenly text-white">
                    {data.map((item) => (
                        <div  key={item.name}>
                            <div className="flex justify-center items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}/>
                                <span>{item.name}</span>
                            </div>
                            <span className="ml-4">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChartPie;