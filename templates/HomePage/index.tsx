import Layout from "@/components/Layout";
import Main from "./Main";
import Hot from "./Hot";
import Dream from "./Dream";
import Collections from "./Collections";
import Auctions from "@/components/Auctions";
import Spotlight from "./Spotlight";
import Creativity from "./Creativity";
import Newsletter from "@/components/Newsletter";
import Background from "@/components/Background";

import { auctions } from "@/mocks/auctions";

const HomePage = () => {
  return (
    <Layout background="$n2" layoutNoOverflow noRegistration>
      <Main />
      <Hot />
      <Dream />
      <Collections />
      {/* <Auctions items={auctions} /> */}
      <Spotlight />
      <Creativity />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
