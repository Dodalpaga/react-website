import Hero from './utils/Hero';
import Header from './utils/Header';
import Section from './utils/Section';
import Testimonial from './utils/Testimonial';
import ContactUs from './utils/ContactUs';
import Footer from './utils/Footer.jsx';
import AboutUs from './utils/AboutUs';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './css/App.css'; // Import the background CSS file

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

function LandingPage() {
  return (
    <div id="LandingPage" className="fixedBackground">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Hero />
        <Section />
        <AboutUs />
        <Testimonial />
        <ContactUs />
      </ThemeProvider>
    </div>
  );
}

export default LandingPage;
