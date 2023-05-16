import './App.css';
import ThemeProvider from './Context/theme';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo';

function App() {
  return (
    <MantineProvider>
      <ThemeProvider>
        <SettingsProvider>
          <div className='App'>
            <Header />
            <Todo />
            <Footer />
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
