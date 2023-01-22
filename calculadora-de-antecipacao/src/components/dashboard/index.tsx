import Api from "../../services/Api";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Div } from "./styles";

interface CalculateData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
}

interface IResult {
  [key: string]: number;
}

function Dashboard() {
  const [result, setResult] = useState<any>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CalculateData>();

  const handleChange = ({ e }: any) => {
    setValue("days", e.target.value.split(",").map(Number));
  };

  function calculate(data: CalculateData) {
    Api.post("/", data, { timeout: 5000 }).then((response) => {
      setResult(response.data);
    });
  }

  function renderResult(result: any) {
    const resultArray: any = [];

    for (const key in result) {
      resultArray.push({ [key]: result[key] });
    }

    return resultArray.map((a: number, b: number) => {
      let key = Object.keys(a)[0];
      let value = Object.values(a)[0];
      console.log(key);
      if (key != "1") {
        return <p key={b}>{`Em ${key} dias: ${value}`}</p>;
      } else {
        return <p key={b}>{`Amanhã: ${value}`}</p>;
      }
    });
  }

  return (
    <Div>
      <div className="modal-calculate">
        <form onSubmit={handleSubmit(calculate)}>
          <h1>Simule sua antecipação</h1>

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
            required={false}
            onChange={(e) =>
              setValue("days", e.target.value.split(",").map(Number))
            }
            // {...register("days", {required: false,
            //   onChange: (e) => {setValue("days", e.target.value.split(",").map(Number))},
            // })}
          />
          <button
            type="submit"
            onClick={() => {
              const resultArray = [];

              for (const key in result) {
                resultArray.push({ key: result[key] });
              }
              setResult(resultArray);
            }}
          >
            Calcular
          </button>
        </form>
        <aside>
          <h2>Você receberá:</h2>
          {result && renderResult(result)}
        </aside>
      </div>
    </Div>
  );
}

export default Dashboard;
