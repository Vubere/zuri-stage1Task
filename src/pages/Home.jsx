import { useEffect } from "react";

import Profile from "../components/Profile";
import Links from "../components/Link";

export default function Home() {
  useEffect(() => {
    document.title = "Victor's Zuri Link Tree";
  }, []);
  return (
    <section className="content">
      <Profile />
      <Links />
    </section>
  );
}
