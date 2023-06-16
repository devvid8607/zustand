import "./App.css";
import { useBookStore } from "./store/bookStore";
import { shallow } from "zustand/shallow";

// By default if we do not use shallow, Zustand detects changes with strict equality (old === new), which is efficient for atomic states.
// So the default strict equality would not be useful in this case to evaluate objects and always triggering a re-render even if the object does not change.
// So Shallow will upload the object/array and compare its keys, if any is different it will recreate again and trigger a new render.

function App() {
  const { amount, title } = useBookStore(
    (state) => ({ amount: state.amount, title: state.title }),
    shallow
  );

  // const amount=useBookStore(state=>state.amount)
  const updateAmount = useBookStore((state) => state.updateAmount);
  return (
    <div>
      <h1>Books: {amount}</h1>
      <h4>Title: {title} </h4>

      <button onClick={() => updateAmount(10)}>update amount</button>
    </div>
  );
}

export default App;
