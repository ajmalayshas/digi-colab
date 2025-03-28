import DashboardCard from "@/components/common/dashboardCard"
import JobStatistics from "./components/jobStatistics"
import JobStatus from "./components/jobStatus"
import CandidateSource from "./components/candidateSource"
import ScheduleTable from "./components/scheduleTable"


const overView = [
    {
        title: "Total Candidates",
        value: "500",
        icon: "/images/dashboard/dash-users.png",
    },
    {
        title: "Job Openings",
        value: "200",
        icon: "/images/dashboard/dash-box.png",
    },
    {
        title: "Interviewed",
        value: "150",
        icon: "/images/dashboard/dash-graph.png",
    },
    {
        title: "Rejected",
        value: "110",
        icon: "/images/dashboard/dash-reset.png",
    },
]
export default function page() {
    return (
        <div>
            <h3 className="text-[#333333] font-[600] text-[22px] ">Quick Status</h3>
            <div className="mt-2">
                <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
                    {overView.map((data, i) =>
                        <li>
                            <DashboardCard {...data} key={i} />
                        </li>
                    )}
                </ul>
            </div>
            <div className="mt-5 flex flex-col gap-[20px]">
                <ul className="grid h-full items-stretch grid-cols-1 lg:grid-cols-4 gap-[20px]">
                        <li className="col-span-3  h-full flex">
                            <JobStatistics/>
                        </li>
                        <li className=" h-full flex">
                            <JobStatus />
                        </li>
                </ul>
                <ul className="grid h-full items-stretch grid-cols-1 lg:grid-cols-4 gap-[20px]">
                        <li className=" h-full flex">
                            <CandidateSource />
                        </li>
                        <li className="col-span-3  h-full flex">
                            <ScheduleTable/>
                        </li>
                </ul>
            </div>
        </div>
    )
}