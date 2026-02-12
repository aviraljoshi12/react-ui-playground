import Stepper from "./components/Stepper";
import "./styles.css";

export default function App() {
  const steps = [
    {
      label: "Sachin Tendulkar",
      content: <div>Batsman</div>,
    },
    {
      label: "MS Dhoni",
      content: <div>Wicket Keeper / Batsman</div>,
    },
    {
      label: "Jasprit Bumrah",
      content: <div>Bowler</div>,
    },
    {
      label: "Hardik Pandya",
      content: <div>All Rounder</div>,
    },
    {
      label: "Babar Azam",
      content: <div>Gully Cricketer</div>,
    },
  ];
  return (
    <div className="App">
      <Stepper steps={steps} />
    </div>
  );
}
