
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
function Chart() {
  const data = [
    { name: 'Occupied tents', number: '23' },
    { name: 'Clean', number: '23' },
    { name: 'Dirty', number: '23' },
    { name: 'Inspected', number: '23' },
    { name: 'Available tents', number: '23' },
    { name: 'Clean', number: '23' },
    { name: 'Dirty', number: '23' },
    { name: 'Inspected tents', number: '23' },


  ]
  
  return (
      <div>
        <h1>Room Status</h1>
        <div className="pie-container">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="number"
              isAnimationActive={true}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label            
            >
            </Pie>
            <Tooltip></Tooltip>
          </PieChart>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            barSize={20}
          >
            <XAxis dataKey='name' scale='point' padding={{left:10, right:10}}
            />
            <YAxis/>
          <Tooltip />
          <Legend></Legend>
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="number" fill="#8884d8" background={{fill:"#eee"}} />
          </BarChart>
        </div>
    </div>
  
  )
}
export default Chart;
