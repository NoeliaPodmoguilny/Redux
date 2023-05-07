import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelect } from '../redux/selectors/counterSelect'
import ComponentLayout from '../layout/ComponentLayout'
import { byAmount, decrease, increase } from '../redux/reducers/counterReducer'

export const Componente = () => {

    const { count, timer } = useSelector(counterSelect)  
    //dispatch me permite ejecutar las fn que salen de reducer. "Dispatch"=despachar, enviar...
    const dispatch = useDispatch()

    const [value, setValue] = useState(0)

    const changeValue = newValue => setValue(newValue)

    const css = "btn btn-primary"

    return (
        <ComponentLayout>
            <div>Count: {count}</div>
            <div>Timer: {timer}</div>

            <button
                className={css}
                onClick={()=> dispatch(increase())}
            >
                Incrementar + 1
            </button>

            <button
                className={css}
                onClick={()=> dispatch(decrease())}
            >
                Decrementar - 1
            </button>

            <div 
                className='bg-secondary rounded p-3'
            >
            <button
                className={css}
                onClick={()=> dispatch(byAmount(value))}
            >
                Incrementar con ...
            </button>

            <input 
                type="number" 
                className='form-control mt-3'
                placeholder='ingrese un numero'
                onChange={e=> changeValue(Number(e.target.value))}
            />
            </div>
            
        </ComponentLayout>
    )
}
