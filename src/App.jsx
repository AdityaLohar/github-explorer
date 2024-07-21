import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import RepositoryDetails from './pages/RepositoryDetails';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/search/:keyword" element={<SearchResults />} />
        <Route path="/repository/:owner/:repo" element={<RepositoryDetails />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
