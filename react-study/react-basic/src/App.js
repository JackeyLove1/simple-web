import logo from './logo.svg';
import './App.css';

const list = [
    {
        name: 'James',
        age: 20,
        city: 'London'
    },
    {
        name: 'James',
        age: 20,
        city: 'London'
    }
]

function App() {
    const handleClick = () => {
        window.alert('Hello, World!')
    }

    return (
        <div className="App">
            <div> Hello, World!</div>
            <ul>
                {list.map((item, index) =>
                    <>
                        <li key={index}>{item.name} : {item.city}</li>
                    </>
                )}
            </ul>
            <button onClick={handleClick}> HandleClick </button>
        </div>
    );
}

export default App;
