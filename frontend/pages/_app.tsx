import { StyledThemeProvider } from "@definitions/styled-components";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@styles/globalStyles";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <StyledThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <RecoilRoot>
                        <GlobalStyle />
                        <Header />
                        <Component {...pageProps} />
                        <Footer />
                    </RecoilRoot>
                </Hydrate>
            </QueryClientProvider>
        </StyledThemeProvider>
    );
}

export default MyApp;
