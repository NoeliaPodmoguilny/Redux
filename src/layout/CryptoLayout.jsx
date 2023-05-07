


export const CryptoLayout = ({children}) => {
    
    const css = "d-flex flex-column gap-3 bg-dark text-light p-4 my-4 shadow rounded"
    

    return (
        <div 
            className={css}
        >
            {children}
        </div>
    )
}

