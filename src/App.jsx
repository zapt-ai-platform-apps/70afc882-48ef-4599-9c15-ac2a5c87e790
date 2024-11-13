import { Routes, Route } from '@solidjs/router';
import Home from './pages/Home';

function App() {
  return (
    <div
      class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4"
      dir="rtl"
    >
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;