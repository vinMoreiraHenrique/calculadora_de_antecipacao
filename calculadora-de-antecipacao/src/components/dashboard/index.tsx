import Api from "../../services/Api";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Div  } from "./styles";
import  {FormInput} from "../../styles/FormInput"
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculateData, IResult } from "./dashboard.interfaces";

function Dashboard() {
  const [result, setResult] = useState<any>([]);

  const formSchema = Yup.object().shape({
    amount: Yup.number()
      .min(1000, "Valor deve ser maior ou igual a 1000")
      .required("O campo é obrigatório"),

    installments: Yup.number()
      .typeError("Deve ser um número de 1 a 12")
      .min(1, "Deve ser um número de 1 a 12")
      .max(12, "Deve ser um número de 1 a 12")
      .required("O campo é obrigatório"),
    mdr: Yup.number()
      .typeError("Deve ser um número de 1 a 12")
      .required("Campo obrigatório"),
    days: Yup.array()
      .of(Yup.number())
      .typeError("Devem ser números"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CalculateData>({
    resolver: yupResolver(formSchema),
  });

  async function calculate(data: CalculateData) {
    await Api.post("/", data, { timeout: 5000 }).then((response) => {
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
        return <span key={b}>Em {key} dias:<p style={{ fontWeight: 'bold' }}>{`${value}`}</p></span>;
      } else {
        return <span key={b}>Amanhã: <p style={{ fontWeight: 'bold' }}>{`${value}`}</p></span>;
      }
    });
  }

  return (
    <Div>
      <div className="modal-calculate">
        <form onSubmit={handleSubmit(calculate)}>
          <h1>Simule sua Antecipação</h1>

          <div className="input-err">
            <FormInput
              type="number"
              placeholder="Digite o valor aqui..."
              required
              
              {...register("amount")}
            />
            {errors.amount && (
              <p className="error-message">{errors.amount.message}</p>
            )}
          </div>

          <div className="input-err">
            <FormInput
              type="number"
              id="installments"
              placeholder="Digite o número de parcelas aqui..."
              required
              {...register("installments")}
            />
            {errors.installments && (
              <p className="error-message">{errors.installments.message}</p>
            )}
          </div>

          <div className="input-err">
            <FormInput
              type="number"
              placeholder="Digite a taxa MDR..."
              required
              {...register("mdr")}
            />
            {errors.mdr && <p className="error-message">{errors.mdr.message}</p>}
          </div>
          <div className="input-err">
            <FormInput
              type="text"
              placeholder="Digite os dias aqui..."
              required={false}
              onChange={(e: any) => {
                setValue("days", e.target.value.split(", ").map(Number));
              }}
            />
            {errors.mdr && <p className="error-message">{errors.mdr.message}</p>}
          </div>
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
          <div className="results">{result && renderResult(result)}</div>
        </aside>
      </div>
    </Div>
  );
}

export default Dashboard;
