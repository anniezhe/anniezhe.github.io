import {Providers} from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
          <GoogleAnalytics gaId={publicRuntimeConfig.GA_ID} />
        </Providers>
      </body>
    </html>
  );
}