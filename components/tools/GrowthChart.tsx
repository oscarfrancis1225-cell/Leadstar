type GrowthPoint = {
  year: number;
  balance: number;
  contributed: number;
};

type GrowthChartProps = {
  points: GrowthPoint[];
};

export function GrowthChart({ points }: GrowthChartProps) {
  const width = 640;
  const height = 220;
  const pad = { top: 14, right: 12, bottom: 32, left: 12 };
  const innerWidth = width - pad.left - pad.right;
  const innerHeight = height - pad.top - pad.bottom;
  const maxValue = Math.max(
    1,
    ...points.map((point) => Math.max(point.balance, point.contributed)),
  );
  const lastYear = points.at(-1)?.year ?? 1;

  const x = (year: number) =>
    pad.left + (lastYear === 0 ? 0 : (year / lastYear) * innerWidth);
  const y = (value: number) =>
    pad.top + innerHeight - (value / maxValue) * innerHeight;

  const toPath = (key: "balance" | "contributed") =>
    points
      .map((point, index) => {
        const command = index === 0 ? "M" : "L";
        return `${command}${x(point.year)} ${y(point[key])}`;
      })
      .join(" ");

  const areaPath =
    points.length > 1
      ? `${toPath("balance")} L${x(lastYear)} ${y(0)} L${x(0)} ${y(0)} Z`
      : "";

  const labels = [0, Math.round(lastYear / 2), lastYear].filter(
    (year, index, list) => list.indexOf(year) === index,
  );

  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-white">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Illustrated balance compared with contributions over time"
      >
        {areaPath ? (
          <path d={areaPath} fill="#f6efdf" className="motion-safe:transition-all" />
        ) : null}
        <path
          d={toPath("contributed")}
          fill="none"
          stroke="#dde3ec"
          strokeWidth="2.5"
        />
        <path
          d={toPath("balance")}
          fill="none"
          stroke="#071d49"
          strokeWidth="2.75"
        />
        {labels.map((year) => (
          <text
            key={year}
            x={x(year)}
            y={height - 12}
            textAnchor={year === 0 ? "start" : year === lastYear ? "end" : "middle"}
            fill="#667085"
            fontSize="13"
          >
            Year {year}
          </text>
        ))}
      </svg>
    </div>
  );
}
