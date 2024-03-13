'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  color: '#fff',
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Titulo del gráfico'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(30, 162, 30, 0.5)'
    }
  ]
}

const StackedBar = () => {
  return <Bar options={options} data={data} width={100} height={50} />
}

export default StackedBar
