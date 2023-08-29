"use client";
import React, { useState } from "react";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [length, setLength] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setInputText(newText);
    updateResult(newText);
  };

  const updateResult = (text: string) => {
    setResult(text);
    setLength(text.length);
  };

  const handleButtonClick = (transformFunction: (text: string) => string) => {
    if (inputText) {
      updateResult(transformFunction(inputText));
    }
  };

  const capitalizeFirstLetter = (text: string): string => {
    console.log("cliquei");
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const capitalizeWords = (text: string): string => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pascalCase = (text: string): string => {
    return text
      .split(/[\s\-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  };

  const camelCase = (text: string): string => {
    const pascalCased = pascalCase(text);
    return pascalCased.charAt(0).toLowerCase() + pascalCased.slice(1);
  };

  const kebabCase = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const snakeCase = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "_");
  };

  const currentDateTimeString = (): string => {
    return new Date().getTime().toString();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900">
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-slate-800"
          placeholder="Digite ou cole seu texto aqui"
          name="texto"
          rows={3}
          onChange={handleInputChange}
        ></textarea>

        <div className="buttons mt-4 space-y-4 md:space-y-0 md:flex md:space-x-4 bg-slate-600 p-4 rounded-md">
          <div className="grid grid-cols-2 gap-4">
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick((text) => text.toUpperCase())}
            >
              Maiúscula
            </button>
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(capitalizeFirstLetter)}
            >
              Primeira Maiúscula
            </button>
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(capitalizeWords)}
            >
              Primeiras Maiúsculas
            </button>
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick((text) => text.toLowerCase())}
            >
              Minúscula
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(pascalCase)}
            >
              PascalCase
            </button>
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(camelCase)}
            >
              camelCase
            </button>
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(kebabCase)}
            >
              kebab-case
            </button>
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(snakeCase)}
            >
              snake_case
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-slate-800 text-slate-100 p-2 rounded-md"
              type="button"
              onClick={() => handleButtonClick(currentDateTimeString)}
            >
              Data Atual em MS
            </button>
          </div>
        </div>

        <div className="result mt-4">
          <span className="block font-bold">Resultado:</span>
          <span className="conversion bg-emerald-950 p-4 rounded-md block mt-1">
            {result}
          </span>
          <span className="block font-bold mt-2">
            Tamanho:
            <span className="length ml-1">
              {length} {length !== 1 ? "caracteres" : "caractere"}
            </span>
          </span>
        </div>

        <span className="message hide mt-2 bg-neutral-700">
          Resultado copiado para área de transferência.
        </span>
      </div>
    </div>
  );
};

export default App;
