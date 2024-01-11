import useTimer from "./useTimer";

export default function App() {
  const count = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <div>Count: {count}</div>
    </div>
  );
}