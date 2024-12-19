export const metadata = {
    title: 'Haelpers',
    description: 'Find the Right Professional for Your Needs',
    icons: {
      icon: '/favicon.ico',
    },
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>{children}</body>
      </html>
    );
  }
  