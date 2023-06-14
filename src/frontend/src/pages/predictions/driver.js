import React from 'react'
import { HeaderF1 } from "@/components/Header"



const Card = ({ title, value }) => (
    <div className="flex justify-between">
      <p className="font-bold">{title}:</p>
      <p>{value}</p>
    </div>
);
  

const cardData = [
{ title: 'Team', value: 'Team A' },
{ title: 'Country', value: '5' },
{ title: 'Podiums', value: '10' },
{ title: 'Grand Prix Entered', value: '10' },
{ title: 'World Championships', value: '10' },
{ title: 'Highest Race Finish', value: '10' },
{ title: 'Highest grid position', value: '10' },
{ title: 'Date of birth', value: '10' },
{ title: 'Place of birth', value: '10' },
];

function driver() {
  return (
    <div className="flex flex-col bg-white bg-cover h-screen px-8 py-3 text-black max-w-lg mx-auto">
        <HeaderF1 />
        <div className="flex h-full flex-col font-hauora py-5">
            <h2 className="text-4xl font-bold font-formula1 mb-10">Resultados</h2>
            <div className="grid grid-cols-1 gap-2 mx-2">
                {cardData.map((data, index) => (
                    <div key={index}>
                        <Card title={data.title} value={data.value} />
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default driver