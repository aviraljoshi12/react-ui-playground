import VirtualizedList from "./components/VirtualizedList";
import "./styles.css";

export default function App() {
  const LIST = Array.from({ length: 10000 }, (_, i) => i + 1);

  return (
    <div className="">
      <VirtualizedList list={LIST} height={400} width={300} itemHeight={35} />
    </div>
  );
}
