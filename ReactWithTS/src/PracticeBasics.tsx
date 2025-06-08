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

  // extentions of types 👇 (use & symbol)
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

  // in case of interface 👇

  interface A {
    x: string;
  }
  interface B {
    y: number;
  }
  interface C extends A, B {
    z: () => void;
  }

  let Objectt: C = {
    x: "Adi",
    y: 1,
    z: function () {
      console.log("S");
    },
  };

  // we can extend type from interface or inerface from type, example 👇

  //interface from type
  type Q = {
    a: string;
  };
  interface P extends Q {
    b: number;
  }

  // type from interface
  interface L {
    a: string;
  }

  type M = L & {
    b: number;
  };

  return (
    <>
      <div>Hello World!!</div>
    </>
  );
}

export default App;
