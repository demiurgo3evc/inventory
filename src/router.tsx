import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './layout/Dashboard'
import DailyView from './views/DailyView'
import CompareView from './views/CompareView'
import HistoryView from './views/HistoryView'
import AuthLayout from './layout/AuthLayout'
import LoginView from './views/auth/LoginView'
import RegisterView from './views/auth/RegisterView'
import ProtectedRoute from './components/guards/ProtectedRoute'
import PublicRoute from './components/guards/PublicRoute'
import SummaryView from './views/SummaryView'

export default function Router() {
    return (

        <BrowserRouter>
            {/* <Routes>
                <Route element={<Dashboard />}>
                    <Route path='/' element={<DailyView />} index />
                    <Route path='monthly' element={<Monthly />} />
                    <Route path='compare' element={<CompareView />} />
                    <Route path='history' element={<HistoryView />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />

                </Route>

            </Routes> */}

            <Routes>
                
                <Route element={<ProtectedRoute />}>
                    <Route element={<Dashboard />}>
                        <Route path="/" element={<DailyView />} />
                        <Route path="/monthly" element={<SummaryView />} />
                        <Route path="/compare" element={<CompareView />} />
                        <Route path="/history" element={<HistoryView />} />
                    </Route>
                </Route>

                <Route element={<PublicRoute />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/auth/login" element={<LoginView />} />
                        <Route path="/auth/register" element={<RegisterView />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>

    )
}
