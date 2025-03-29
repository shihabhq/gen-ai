//for bar mock data
const barProps = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales ($)",
      data: [
        12500, 19000, 14200, 20500, 17800, 23100, 25200, 19700, 22300, 24100,
        27800, 29400,
      ],
      backgroundColor: "#3b82f6",
    },
  ],
};

//for line
const lineProps = {
  labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
  datasets: [
    {
      label: "Active Users",
      data: [1200, 1850, 2100, 2540, 2875, 3200],
      borderColor: "#10b981",
      fill: true,
      tension: 0.3,
    },
  ],
};

//for pie chart

const pie = {
  labels: ["Electronics", "Clothing", "Home Goods", "Books", "Other"],
  datasets: [
    {
      data: [35, 25, 20, 12, 8],
      backgroundColor: ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#64748b"],
    },
  ],
};

//scatter
const scatter = {
  datasets: [
    {
      label: "Marketing Campaigns",
      data: [
        { x: 1200, y: 45 },
        { x: 1800, y: 62 },
        { x: 2500, y: 78 },
        { x: 3500, y: 81 },
        { x: 4200, y: 92 },
        { x: 5000, y: 95 },
      ],
      backgroundColor: "#f97316",
    },
  ],
};

const horizontal = {
  labels: ["Laptops", "Phones", "Tablets", "Monitors", "Accessories"],
  datasets: [
    {
      label: "Units in Stock",
      data: [142, 87, 53, 76, 210],
      backgroundColor: "#8b5cf6",
    },
  ],
};
