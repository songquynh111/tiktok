import { useState } from "react";

const orders = [1, 2, 3];
const gifts = ["xe1", "xe2", "xe3"];
const courses = [
  {
    id: 1,
    name: "Harry Ross",
  },
  {
    id: 2,
    name: "Harry Ross1",
  },
  {
    id: 3,
    name: "Laura Washington",
  },
];
function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((acc, cur) => acc + cur);
    return total;
  });

  const [gift, setGift] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState([]);
  console.log(checked);


  const handleIncrease = () => {
    // setCounter(prevState => prevState + 1)
    setCounter(counter + 1);
  };

  const handleRoll = () => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    setGift(gifts[randomIndex]);
  };
  const handleSubit = () => {
    console.log(checked);

  };
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = prev.includes(id)
      if (isChecked) {
        return prev.filter(item => item !== id)
      }else {
        return [...prev, id]
      }
    })

  };

  return (
    <div className="App" style={{ padding: 200 }}>
      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h1>{gift || "Chưa có"}</h1>
      <button onClick={handleRoll}>Roll</button> */}
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubit}>submit</button>
      </div>
    </div>
  );
}

export default App;
