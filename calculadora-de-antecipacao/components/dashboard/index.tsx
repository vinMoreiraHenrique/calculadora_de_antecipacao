import Api from "../../services/api"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface CalculateData {
    amount: number;
    installments: number;
    mdr: number;
    days: Array<number>;
  }

  interface CalculateDataRendering {
    data: CalculateData[]
  }

function Dashboard() {
    const [result, setResult] = useState<CalculateData[]>([]);

    
    
    
  function calculate(data: CalculateData){
    Api.post("", data)
    .then(({ data }: { data: CalculateData }) => {
    setResult([...result, data]);
    })
  
    // return (
      
      
    // );
    }
}