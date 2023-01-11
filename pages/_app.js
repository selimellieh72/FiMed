import "../styles/globals.scss";
import "../styles/forms.scss";
import "../styles/buttons.scss";

import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "fallback",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${open_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
