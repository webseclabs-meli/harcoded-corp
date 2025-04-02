import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-100">
      <main className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Entrar</button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Hardcoded Corp.
        Todos los derechos reservados.
        Contribuia con el proyecto en: Github Harcoded Corp.
      </footer>
    </div>
  );
}

export default App;