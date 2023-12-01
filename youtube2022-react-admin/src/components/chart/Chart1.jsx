import "./chart.scss";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 70 },
  { name: "Remaining", value: 30 },
];

const COLORS = ["#0088FE", "#FFBB28"]; // You can customize colors here

const Chart1 = () => {
    return (
        <div className="chart">
        <ResponsiveContainer width="50%" aspect={1}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend align="right" verticalAlign="top" layout="vertical" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

export default Chart1;
