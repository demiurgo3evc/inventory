import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './layout/Dashboard'
import DailyView from './views/DailyView'
import Monthly from './views/Monthly'
import CompareView from './views/CompareView'
import HistoryView from './views/HistoryView'

export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<Dashboard />}>
                    <Route path='/' element={<DailyView />} index />
                    <Route path='monthly' element={<Monthly />} />
                    <Route path='compare' element={<CompareView/>} />
                    <Route path='history' element={<HistoryView/>} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
