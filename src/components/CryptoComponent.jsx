import { useSelector, useDispatch} from 'react-redux'
import { cryptoSelect } from "../redux/selectors/cryptoSelect"
import { CryptoLayout } from '../layout/CryptoLayout'
import { useEffect } from 'react'
import { getStateServiceThunk } from '../redux/middleware/cryptoMiddleware'

export const CryptoComponent = () => {

    const { crypt, loading, state, price} = useSelector(cryptoSelect)
    const dispatch = useDispatch()

    //como estoy trabajando de manera asincronica necesito un elemento como useEffect:
    useEffect(() => {
        dispatch(getStateServiceThunk())
    }, [])


    return (
        <CryptoLayout>
            <h1>Criptos: </h1>
            <h2 className='bg-light text-dark rounded'>{ crypt.toUpperCase() }</h2>
            <div className='d-flex gap-2 justify-content-center '>
                <h4>Estado del servicio: </h4>
                <h4>{ state
                    ? state === 200
                        ?<div className='badge bg-success'>En línea</div>
                        :<div className='badge bg-danger'>Error de conexión</div>
                    :<div className='badge bg-warning text-dark'>Verificando...</div>
                    } 
                </h4>
            </div>
        </CryptoLayout>
    )
}

