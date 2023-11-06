import { Html } from 'next/document';
export default function RootLayout({ children }) {
  return (
    <Html lang="en">
      <body>{children}</body>
    </Html>
  );
}
