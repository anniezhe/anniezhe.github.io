import {Providers} from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: "Annie He's Website",
  description: "Welcome to my website!",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}


