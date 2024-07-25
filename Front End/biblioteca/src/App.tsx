import './App.css'
import { BookData } from './interface/BookData';
import { Card } from './components/cards/card'

function App() {

  const data: BookData[] = [];

  return (
   <div className="container">
    <h1>Biblioteca</h1>
    <h2>Biel é gay</h2>
    <div className="card-grid">
    {data.map(bookData => <Card 
    price={bookData.price} 
    title={bookData.title}
    image={bookData.image}
    />
    )}
    </div>

   </div>
  )
}

export default App
