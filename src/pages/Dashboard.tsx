import React from 'react'
import statusCard from "../assets/JsonData/status-card-data.json"
import StatusCard from "../components/StatusCard/StatusCard"

import Chart from "react-apexcharts"

const chartOptions = {
  series: [{
    name: 'Online Customers',
    data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
  }, {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
}


const topCustomers = {
  head: [
    'user',
    'total orders',
    'total spending'
  ],
  body: [
    {
      "username": "john doe",
      "order": "490",
      "price": "$15,870"
    },
    {
      "username": "frank iva",
      "order": "250",
      "price": "$12,251"
    },
    {
      "username": "anthony baker",
      "order": "120",
      "price": "$10,840"
    },
    {
      "username": "frank iva",
      "order": "110",
      "price": "$9,251"
    },
    {
      "username": "anthony baker",
      "order": "80",
      "price": "$8,840"
    }
  ]
}

const renderCusomerHead = (item: any, index: number) => (
  <th key={index}>{item}</th>
)

const renderCusomerBody = (item: any, index: number) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const latestOrders = {
  header: [
    "order id",
    "user",
    "total price",
    "date",
    "status"
  ],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
}

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
}

const renderOrderHead = (item: any, index: number) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item: any, index: number) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      {/* <Badge type={orderStatus[item.status]} content={item.status}/> */}
    </td>
  </tr>
)


const Dashboard = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <h3 className="page-header">Dashboard</h3>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCard.map(item => (
              <div className="col-6" key={item.title}>
                {/* status card here */}
                {/* {item.title} */}
                <StatusCard icon={item.icon} count={item.count} title={item.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6" style={{alignSelf:'center', justifySelf:'center'}}>
          <div className="card full-height" style={{alignSelf:'center', justifySelf:'center'}}>
            {/* chart */}
              <Chart
            //   options={themeReducer === 'theme-mode-dark' ? {
            //     ...chartOptions.options,
            //     theme: { mode: 'dark'}
            // } : {
            //     ...chartOptions.options,
            //     theme: { mode: 'light'}
            // }}
                options={chartOptions}
                series={chartOptions.series}
                type='line'
                height='100%'
               />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard