import { Eye, Zap, TrendingUp, ArrowUpRight, LineChart } from "lucide-react";
import StepHeader from "./StepHeader";
import {
  brandSteps,
  dashboardStats,
  viewsChartData,
  budgetUsed,
} from "../../../data/brandCampaign";

const STAT_ICONS = { eye: Eye, zap: Zap, trending: TrendingUp };

function ViewsChart() {
  const width = 400;
  const height = 120;
  const max = 7.2;
  const points = viewsChartData.map((d, i) => {
    const x = (i / (viewsChartData.length - 1)) * width;
    const y = height - (d.value / max) * height;
    return `${x},${y}`;
  });
  const linePath = `M${points.join(" L")}`;
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <div className="flex gap-2">
      <div className="flex shrink-0 flex-col justify-between py-1 text-right font-sfpro text-[0.6rem] text-text-body">
        <span>7.0M</span>
        <span>4.0M</span>
        <span>3.5M</span>
        <span>0.5M</span>
        <span>0</span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="viewsFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EC612C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#EC612C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#viewsFade)" />
        <path d={linePath} fill="none" stroke="#EC612C" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function TrackStep() {
  const step = brandSteps[2];
  const budgetPercent = Math.min(
    100,
    (budgetUsed.spent / budgetUsed.cap) * 100,
  );

  return (
    <div>
      <StepHeader
        icon={LineChart}
        number={step.number}
        eyebrow={step.eyebrow}
        heading={step.heading}
        body={step.body}
      />
      <div className="mt-8 md:pl-16">
        <div className="rounded-2xl bg-black/[0.03] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black/80">
              Campaign dashboard
            </p>
            <span className="rounded-full bg-[#90EE90]/30 px-3 py-1 text-xs font-medium text-[#1F7A1F]">
              Live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {dashboardStats.map((stat) => {
              const Icon = STAT_ICONS[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white p-3 text-center"
                >
                  <Icon size={16} className="mx-auto text-black/60" />
                  <p className="mt-1 font-poppins text-lg font-semibold text-black/80">
                    {stat.value}
                  </p>
                  <p className="text-[0.65rem] text-text-body">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-xl bg-white p-4">
            <div className="flex items-center justify-between font-sfpro text-xs text-text-body">
              <span className="uppercase tracking-wide">
                Verified views · 14D
              </span>
              <span className="flex items-center gap-1 font-medium text-[#1F7A1F]">
                <ArrowUpRight size={12} /> +252%
              </span>
            </div>
            <div className="mt-2">
              <ViewsChart />
            </div>
            <div className="mt-1 flex justify-between pl-8 font-sfpro text-[0.6rem] text-text-body">
              {viewsChartData.map((d) => (
                <span key={d.date}>{d.date}</span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-body">Budget used</span>
              <span className="font-semibold text-black/80">
                ${budgetUsed.spent.toLocaleString()} / $
                {budgetUsed.cap.toLocaleString()}
              </span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-black/80"
                style={{ width: `${budgetPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between font-sfpro text-xs uppercase tracking-wide text-text-body">
            <span>Top performing clips</span>
            <span>312 tracked</span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl">
                <img
                  src="/campain-content-phone.png"
                  alt="Top performing clip"
                  className="w-full"
                />
                <span className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[0.55rem] text-white">
                  <Eye size={9} /> 2.1M
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-base text-[#7F7F7F] font-light flex items-center">
            <img src="/shield.png" alt="shield" className="w-[30px] mr-2" />
            Viewbot detection on, you only pay for{" "}
            <span className="font-semibold ml-1">verified views</span>
          </p>
        </div>
      </div>
    </div>
  );
}
