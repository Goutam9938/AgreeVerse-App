import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar5 } from './agri-verse-project/home/components/Navbar5';
import HomePage from './agri-verse-project/home';
import BuyerMarketplace from './agri-verse-project/buyer-marketplace';
import CommunityForum from './agri-verse-project/community-forum-&-support';
import ResourceTraining from './agri-verse-project/resource-&-training';

// Create a Layout component that includes the Navbar
function Layout({ children }) {
  return (
    <>
      <Navbar5 />
      {children}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<BuyerMarketplace />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/resources" element={<ResourceTraining />} />
        </Routes>
      </Layout>
    </Router>
  )
}