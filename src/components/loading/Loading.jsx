import { Box, Skeleton } from "@mui/material";

export function Loading({ type }) {
  switch (type) {
    case "BAR":
      return <BarChartSkeleton />;
    case "LINE":
      return <LineChartSkeleton />;
    case "PIE":
      return <PieChartSkeleton />;
    case "SCATTER":
      return <ScatterChartSkeleton />;
    case "HORIZONTAL":
      return <HorizontalBarSkeleton />;
    default:
      return (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          className="bg-[#1e293b] rounded-lg"
        />
      );
  }
}

export function BarChartSkeleton() {
  return (
    <div className="relative h-[400px] w-full">
      {/* X-axis */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} width={40} height={20} className="bg-[#1e293b]" />
        ))}
      </div>

      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} width={40} height={1} className="bg-[#1e293b]" />
        ))}
      </div>

      {/* Bars */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 h-[80%]">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width={30}
            height={Math.random() * 80 + 20 + "%"}
            className="bg-[#0066fe] rounded-t"
          />
        ))}
      </div>
    </div>
  );
}

export function LineChartSkeleton() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(5)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width="100%"
            height={1}
            className="bg-[#1e293b]"
          />
        ))}
      </div>

      {/* Animated line */}
      <div className="absolute bottom-0 left-0 right-0 h-[80%]">
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          className="bg-transparent relative"
        >
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066fe] animate-pulse"></div>
        </Skeleton>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} width={40} height={20} className="bg-[#1e293b]" />
        ))}
      </div>
    </div>
  );
}

export function PieChartSkeleton() {
  return (
    <Box className="relative h-[400px] w-full flex items-center justify-center">
      <Skeleton
        variant="circular"
        width={300}
        height={300}
        className="bg-[#1e293b] relative"
      >
        {/* Pie segments animation */}
        <Box className="absolute inset-0 flex items-center justify-center">
          <Box className="animate-spin rounded-full h-[180px] w-[180px] border-t-4 border-[#0066fe] border-opacity-50"></Box>
        </Box>
      </Skeleton>

      {/* Legend */}
      <Box className="absolute right-4 top-4 space-y-2">
        {[...Array(4)].map((_, i) => (
          <Box key={i} className="flex items-center space-x-2">
            <Skeleton
              variant="circular"
              width={12}
              height={12}
              className="bg-[#0066fe]"
            />
            <Skeleton width={60} height={20} className="bg-[#1e293b]" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function ScatterChartSkeleton() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Grid */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(5)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width="100%"
            height={1}
            className="bg-[#1e293b]"
          />
        ))}
      </div>

      {/* Points */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <Skeleton
            key={i}
            variant="circular"
            width={10}
            height={10}
            className="absolute bg-[#0066fe]"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Axes */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height={1}
        className="absolute bottom-0 bg-[#4caeff]"
      />
      <Skeleton
        variant="rectangular"
        width={1}
        height="100%"
        className="absolute left-0 bg-[#4caeff]"
      />
    </div>
  );
}

export function HorizontalBarSkeleton() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-[100px] flex flex-col justify-between py-4">
        {["laptops", "Phones", "Tablets", "Monitors", "Accessories"].map(
          (label, i) => (
            <Skeleton key={i} width={80} height={20} className="bg-[#1e293b]" />
          )
        )}
      </div>

      {/* Bars */}
      <div className="absolute top-0 right-0 bottom-0 left-[120px] flex flex-col justify-between py-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative h-8 w-full">
            <Skeleton
              variant="rectangular"
              width={`${Math.random() * 70 + 30}%`}
              height="100%"
              className="bg-[#0066fe] rounded-r"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
