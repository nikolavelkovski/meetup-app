import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AllMeatUps } from './pages/AllMeetUps';
import { Favorites } from './pages/Favorites';
import { NewMeetup } from './pages/NewMeetup';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Layout>

      <Routes>
        <Route path="/" element={<AllMeatUps />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </Layout>
  );
}

export default App;
