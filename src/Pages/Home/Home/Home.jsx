
import ChartArea from "../../../Components/Chartbox/ChartArea";
import ChartBar from "../../../Components/Chartbox/ChartBar";
import ChartPie from "../../../Components/Chartbox/ChartPie";
import Chartbox from "../../../Components/Chartbox/Chartbox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../../Data/data";
import TopDeals from "../TopDeals/TopDeals";


const Home = () => {
    return (


        <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 my-14">
            <div className="col-span-12 lg:col-span-3 row-span-2 p-5 border-[1px] rounded-lg">
                <TopDeals></TopDeals>
            </div>
            <div className="col-span-12 lg:col-span-3 row-span-1 h-full"><Chartbox props={chartBoxUser}></Chartbox></div>
            <div className="col-span-12 lg:col-span-3 row-span-1"><Chartbox props={chartBoxRevenue}></Chartbox></div>
            <div className="col-span-12 lg:col-span-3 row-span-2 p-5 border-[1px] rounded-lg">
               <ChartPie></ChartPie>
            </div>
            <div className="col-span-12 lg:col-span-3 row-span-1"><Chartbox props={chartBoxProduct}></Chartbox></div>
            <div className="col-span-12 lg:col-span-3 row-span-1"><Chartbox props={chartBoxConversion}></Chartbox></div>
            <div className="col-span-12 lg:col-span-3 row-span-4 p-5 border-[1px] rounded-lg h-[250px]">
                <ChartBar props={barChartBoxVisit}></ChartBar>
            </div>

            <div className="col-span-6 row-span-3 border-[1px] rounded-lg h-[250px] p-3"><ChartArea></ChartArea></div>

            <div className="col-span-12 lg:col-span-3 row-span-4 p-5 border-[1px] rounded-lg h-[250px]">
                <ChartBar props={barChartBoxRevenue}></ChartBar>
            </div>

        </div>



        // <div className="grid grid-cols-12 gap-4 mt-5">
        //     <div className="col-span-3 p-5 border-2 rounded-lg min-h-[180px] h-auto">
        //         <TopDeals></TopDeals>
        //     </div>
        //     <div className="col-span-3 max-h-[180px]"><Chartbox props={chartBoxUser}></Chartbox></div>
        //     <div className="col-span-3 max-h-[180px]"><Chartbox props={chartBoxRevenue}></Chartbox></div>
        //     <div className="col-span-3 min-h-[180px] h-auto">4</div>
        //     <div className="col-span-3 max-h-[180px]"><Chartbox props={chartBoxProduct}></Chartbox></div>
        //     <div className="col-span-3 max-h-[180px]"><Chartbox props={chartBoxConversion}></Chartbox></div>
        //     <div className="col-span-3 p-5 border-2 rounded-lg min-h-[180px] h-auto">
        //         <TopDeals></TopDeals>
        //     </div>

        //     <div className="col-span-6"><Chartbox props={chartBoxConversion}></Chartbox></div>


        // </div>
    );
};

export default Home;