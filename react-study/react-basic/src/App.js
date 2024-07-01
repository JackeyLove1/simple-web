import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid"
import dayjs from "dayjs"
import axios from "axios"
import store from "./store";
import {Provider, useSelector, useDispatch} from "react-redux";

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

function Button() {
    return (
        <button> click me !</button>
    )
}

function Son(props) {
    // console.log(props)
    return <>
        <div>
            Son component: {props.name}
            jsx: {props.child}
        </div>
    </>
}

function Son2({OnGetMsg}) {
    const msg = "son message"
    // OnGetMsg(msg)
}


function useToggle() {
    const [value, setValue] = useState(true)
    const toggle = () => {
        setValue(!value)
    }

    return {
        value,
        toggle
    }
}

function getData() {
    return axios.get(
        "http://localhost:3000/posts"
    )
}

function App() {
    const handleClick = () => {
        window.alert('Hello, World!')
    }

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }


    const [value, setValue] = useState('')

    const inputRef = useRef(null)

    const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"))

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(dayjs().format("HH:mm:ss"))
        })
        return () => clearInterval(timer)
    }, []);

    const name = "JackyFan"

    const onGetMsg = (msg) => {
        console.log(msg)
    }

    const {value: isToggled, toggle: handleToggle} = useToggle();

    const [list, setList] = useState([])
    useEffect(() => {
        getData().then((res) => {
            setList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, []);


    // const {counter} = useSelector(state => state.count)
    // const dispatch = useDispatch()


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
            <div className="components">

                <button onClick={handleClick}> HandleClick</button>

                <Button></Button>

                <div className="Counter">
                    <button className="btn" onClick={handleDecrement}> -</button>
                    <span className="text-red-500"> {count}</span>
                    <button className="btn" onClick={handleIncrement}> +</button>
                </div>

                <input
                    ref={inputRef}
                    className=" mt-[10px] bg-amber-100 input w-full max-w-xs"
                    type="text"
                    value={value}
                    placeholder="Please Input: "
                    onChange={(e) => {
                        console.log("ref value is: ", inputRef.current.value)
                        setValue(e.target.value)
                    }}
                />

                <div className="text-black">Input: {value}</div>

                <button className="btn btn-primary" onClick={() => {
                    const uuids = uuidv4()
                    // console.log("uuid: ", uuids)
                }}> UUID Generator
                </button>

                <div className="flex items-center justify-center mt-[10px] h-[100px] bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Current Time</h1>
                        <p className="text-2xl">{currentTime}</p>
                    </div>
                </div>

                <Son
                    name={name}
                    age={18}
                    isTrue={true}
                    list={["vue", "react", "angular"]}
                    obj={{name: "jacky"}}
                    cb={() => {
                        console.log("callback")
                    }}
                    child={<span> this is child</span>}
                />

                <Son2 OnGetMsg={onGetMsg}/>

                <div>
                    {isToggled && <div className="text-xl text-amber-500"> this is toggle </div>}
                    <button className="btn btn-warning" onClick={handleToggle}> Toggle</button>
                </div>

                <ul>
                    {list.map(item => <li key={item.id}>{item.title} : {item.views}</li>)}
                </ul>
            </div>

            <div>

            </div>
        </div>
    );
}

export default App;
