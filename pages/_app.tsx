import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '../src/contexts/ThemeProvider/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;