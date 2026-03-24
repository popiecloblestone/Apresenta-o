import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Treatments from './pages/Treatments';
import Infrastructure from './pages/Infrastructure';
import Technology from './pages/Technology';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/tratamentos" replace />} />
          <Route path="tratamentos" element={<Treatments />} />
          <Route path="clinicas" element={<Infrastructure />} />
          <Route path="tecnologia" element={<Technology />} />
          <Route path="equipe" element={<Team />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
