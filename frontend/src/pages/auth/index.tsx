import { Spinner, Stack } from "@shopify/polaris";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("getServerSideProps");
  return { props: {}};
}

const AuthPage: NextPage = () => {
  return (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  }}>
    <Stack vertical alignment="center" distribution="center">
      <Spinner size="large" />
    </Stack>
  </div>
  );
}

export default AuthPage;
