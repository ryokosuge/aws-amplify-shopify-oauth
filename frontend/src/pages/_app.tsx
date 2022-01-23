import "@shopify/polaris/build/esm/styles.css"

import React, { FC, VFC } from "react";
import type { AppProps } from 'next/app'

import { AppProvider as PolarisAppProvider, Spinner, Stack } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

import { Provider } from "@shopify/app-bridge-react";

import { PolarisLink } from "../components/PolarisLink";
import { useRouter } from "next/router";

const PolarisProvider: FC = ({ children }) => (
  <PolarisAppProvider i18n={translations} linkComponent={PolarisLink}>
    {children}
  </PolarisAppProvider>
);

type AppBridgeProviderProps = {
  apiKey: string;
  host: string;
  forceRedirect: boolean;
};

const AppBridgeProvider: FC<AppBridgeProviderProps> = ({ apiKey, host, forceRedirect, children }) => (
  <Provider config={{
    apiKey,
    host,
    forceRedirect,
  }}>{children}</Provider>
);

const AppLoading: VFC = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  }}>
    <Stack vertical alignment="center" distribution="center">
      <Spinner size="large" />
    </Stack>
  </div>
);

const AppProvider: FC = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
}

const App = ({ Component, pageProps }: AppProps) => {
  const { query } = useRouter();
  const host = query.host as string | undefined;

  if (host == null) {
    // hostがない場合はAppBridgeProvider使わない
    return (
      <PolarisProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </PolarisProvider>
    );
  }

  return (
    <PolarisProvider>
      <AppBridgeProvider apiKey={API_KEY} host={host} forceRedirect={true}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  )
}

export default App;
