function App() {
  let name: string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  // tuple
  let role: [number, string];
  role = [2, "Adi"];

  // -----------------------------------------------------
  // to define types of objects

  //we have 2 ways

  // 1st way
  let person: Object;

  // 2nd way
  //use type or interface

  type Person = {
    name: string;
    age?: number;
  };
  let pperson: Person = {
    name: "Aditya",
    age: 12,
  };

  let lotsOfPeople: Person[];

  let agee: number | string; // can be a number or string
  const newLocal = (agee = 7);

  // instead of any use unknown

  let a: any;
  let b: unknown;

  // -----------------------------------------------------
  //Functions

  printName: Function;
  function printName(name: string) {
    console.log(name);
  }
  printName("Adiyya");

  // 2nd method

  let printNamee: (name: string) => void; // as it returns noting it just prints. We can use never also.(name:string)=>never is a function never returns anyting
  // void means it can return undefined.

  // deep dive in Aliases

  type Personn = {
    name: string;
    age: number;
  };
  interface Personnn {
    name: string;
    age: string;
  }

  // but whats the difference between type and interface?

  type X = {
    a: string;
    b: number;
  };
  type Y = {
    c: string;
    d: number;
  };

  type Z = X &
    Y & {
      e: string;
      f: number;
    };

  let z: Z = {
    a: "Adi",
    b: 1,
    c: "cosmo",
    d: 23,
    e: "sw",
    f: 23,
  };

  return (
    <>
      <div>Hello World!!</div>
    </>
  );
}

export default App;
