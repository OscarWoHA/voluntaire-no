import React from 'react'

const App: React.FC = () => {
    return <header className="flex flex-col justify-center text-center h-screen bg-gradient-to-br from-blue-500 to-green-500 text-white">
        <h1 className="text-5xl font-serif mb-2">Voluntaire</h1>
        <p className="text-xl font-light">en tjeneste i <a href="https://datakonsulent.no" className="font-serif">Datakonsulent</a>-familien</p>
    </header>
}

export default App