import { render, screen } from '@testing-library/react';
import Calculator from './Components/Calculator';
import { ClassSeries } from './utils/ClassSeries';

describe("Testeando metodo metodo serie",() =>{
 it("Debe resultar 0 al ingresar 0",()=>{
  const result = ClassSeries.serie(0)
  expect(result).toBe(0)
 })
 it("Debe resultar 0 al ingresar 1",()=>{
  const result = ClassSeries.serie(1)
  expect(result).toBe(0)
 })
 it("Debe resultar 6 al ingresar 2",()=>{
  const result = ClassSeries.serie(2)
  expect(result).toBe(6)
 });
 it("Debe resultar 14 al ingresar 3",()=>{
  const result = ClassSeries.serie(3)
  expect(result).toBe(14)
 });
 it("Debe resultar 26 al ingresar 4",()=>{
  const result = ClassSeries.serie(4)
  expect(result).toBe(26)
 });
 it("Debe resultar 39 al ingresar 5",()=>{
  const result = ClassSeries.serie(5)
  expect(result).toBe(39)
 });
 it("Debe resultar 57 al ingresar 6",()=>{
  const result = ClassSeries.serie(6)
  expect(result).toBe(57)
 });
 it("Debe resultar 75 al ingresar 7",()=>{
  const result = ClassSeries.serie(7)
  expect(result).toBe(75)
 });
 it("Debe resultar 96 al ingresar 8",()=>{
  const result = ClassSeries.serie(8)
  expect(result).toBe(96)
 });
 it("Debe resultar 114 al ingresar 9",()=>{
  const result = ClassSeries.serie(9)
  expect(result).toBe(114)
 });
});

describe("Testeando renderizado de resultados",()=>{

  it('Mostrar 0 como resultado de la operacion al ingresar 0', () => {
    render(<Calculator number={0}/>);
    const result = screen.getByText("0");
    expect(result).toBeInTheDocument();
  });
  
  it('Mostrar 0 como resultado de la operacion al ingresar 1', () => {
    render(<Calculator number={1}/>);
    const result = screen.getByText("0");
    expect(result).toBeInTheDocument();
  });

  it('Mostrar 6 como resultado de la operacion al ingresar 2', () => {
    render(<Calculator number={2}/>);
    const result = screen.getByText("6");
    expect(result).toBeInTheDocument();
  });

  it('Mostrar 14 como resultado de la operacion al ingresar 3', () => {
    render(<Calculator number={3}/>);
    const result = screen.getByText("14");
    expect(result).toBeInTheDocument();
  });
  it('Mostrar 26 como resultado de la operacion al ingresar 4', () => {
    render(<Calculator number={4}/>);
    const result = screen.getByText("26");
    expect(result).toBeInTheDocument();
  });
  it('Mostrar 39 como resultado de la operacion al ingresar 5', () => {
    render(<Calculator number={5}/>);
    const result = screen.getByText("39");
    expect(result).toBeInTheDocument();
  });
  it('Mostrar 57 como resultado de la operacion al ingresar 6', () => {
    render(<Calculator number={6}/>);
    const result = screen.getByText("57");
    expect(result).toBeInTheDocument();
  });
  it('Mostrar 75 como resultado de la operacion al ingresar 7', () => {
    render(<Calculator number={7}/>);
    const result = screen.getByText("75");
    expect(result).toBeInTheDocument();
  });
  it('Mostrar 96 como resultado de la operacion al ingresar 8', () => {
    render(<Calculator number={8}/>);
    const result = screen.getByText("96");
    expect(result).toBeInTheDocument();
  });
  it('Mostrar 114 como resultado de la operacion al ingresar 9', () => {
    render(<Calculator number={9}/>);
    const result = screen.getByText("114");
    expect(result).toBeInTheDocument();
  });
})


