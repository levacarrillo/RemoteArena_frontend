import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './containers/Login/Login';
import { About } from './containers/About/About';
import { InternalError } from './containers/InternalError/InternalError';
import { Calendar } from './containers/Calendar/Calendar';
import { Home } from './containers/Home/Home';
import { NotFound } from './containers/NotFound/NotFound';

import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="app">
      <Router>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/about" element={<About />} />
              <Route path="/error" element={<InternalError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
      </Router>
    </Layout>
  );
}

export default App;
