import { Routes, Route } from '@solidjs/router';
import Home from './pages/Home';
import SellApps from './pages/SellApps';

function App() {
  return (
    <div
      class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4"
      dir="rtl"
    >
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/sell-apps" component={SellApps} />
      </Routes>
    </div>
  );
}

export default App;