import Theme from '../styles/theme';
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

    return (
        <>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}
