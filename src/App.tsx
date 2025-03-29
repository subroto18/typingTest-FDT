import { AppProvider } from "./context/AppContext";
import Route from "./routes/index";

function App() {
  return (
    <AppProvider>
      <Route />
    </AppProvider>
  );
}

export default App;
