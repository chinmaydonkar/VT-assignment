import React, { useState } from "react";
import styled from "styled-components";

const ConverterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid grey;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 45%;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 45%;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const Result = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
`;

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("celsius");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const temp = parseFloat(temperature);

    if (!isNaN(temp)) {
      if (scale === "celsius") {
        setResult(
          `${temp}°C is equal to ${(((temp - 32) * 5) / 9).toFixed(2)}°F`
        );
      } else {
        setResult(
          `${temp}°F is equal to ${((temp * 9) / 5 + 32).toFixed(2)}°C`
        );
      }
    } else {
      setResult("Please enter a valid number");
    }
  };

  return (
    <ConverterContainer>
      <Title>Temperature Converter</Title>
      <InputContainer>
        <Input
          type="number"
          placeholder="Enter temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <Select value={scale} onChange={(e) => setScale(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </Select>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleConvert}>Convert</Button>
      </ButtonContainer>
      <Result>{result}</Result>
    </ConverterContainer>
  );
};

export default TemperatureConverter;
