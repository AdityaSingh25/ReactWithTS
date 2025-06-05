function App() {
  let name: string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  // tuple
  let role: [number, string];
  role = [2, "Adi"];

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

  return (
    <>
      <div>Hello World!!</div>
    </>
  );
}

export default App;
