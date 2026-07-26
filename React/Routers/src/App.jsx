import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '60vh' }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
