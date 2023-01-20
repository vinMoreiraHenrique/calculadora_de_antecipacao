import Api from "../../services/Api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Div } from "./styles";

interface CalculateData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
}

interface CalculateDataRendering {
  data: CalculateData[];
}

function Dashboard() {
  const [result, setResult] = useState<CalculateData[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CalculateData>();

  const handleChange = (e: any) => {
    setValue("days", e.target.value.split(",").map(Number));
  };

  function calculate(data: CalculateData) {
    Api.post("/", data, 
    {timeout: 5000}).then((response) => {
      console.log(response.data);
      
    });
  }
  return (
    <Div>
      <form onSubmit={handleSubmit(calculate)}>
        <input
          type="number"
          placeholder="Digite o valor aqui..."
          required
          {...register("amount")}
        />
        <input
          type="number"
          placeholder="Digite o número de parcelas aqui..."
          required
          {...register("installments")}
        />
        <input
          type="number"
          placeholder="Digite a taxa MDR..."
          required
          {...register("mdr")}
        />
        <input
          type="text"
          placeholder="Digite os dias aqui..."
          onChange={e => {
            setValue("days", e.target.value.split(",").map(Number));
          }}
          required={false}
        />
        <button type="submit">Adicionar</button>
      </form>
    </Div>
  );
}

export default Dashboard;
