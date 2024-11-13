import { Routes, Route } from '@solidjs/router';
import Home from './pages/Home';
import OrderApp from './pages/OrderApp';

function App() {
  return (
    <div
      class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4"
      dir="rtl"
    >
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/order-app" component={OrderApp} />
      </Routes>
    </div>
  );
}

export default App;