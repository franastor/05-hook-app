import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
//import { CallbackHok } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
//import { Memohook } from './06-memos/MemoHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustonHooks'
//import { FocusScreen } from './04- useRef/FocusScreen'
//import { LayoutEffect } from './05-useLayoutEffect/LayoutEffect'
//import { Memorize } from './06-memos/Memorize'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWhithCustomHook } from './01-useState/CounterWhithCustomHook'
//import { HooksApp } from './HooksApp'

//import { FormWC } from './useEffect/FormWC'
//import { SimpleForm } from './useEffect/SimpleForm'
//import './08-useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
) 
