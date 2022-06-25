import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Cadastro from './pages/cadastrar'
import Consultar from './pages/consultar'

export default function Index(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Cadastro/>}/>
                <Route path='/consultar' element={<Consultar/>}/>
			</Routes>
		</BrowserRouter>	
)
    }