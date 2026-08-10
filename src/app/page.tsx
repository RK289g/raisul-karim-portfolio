import dynamic from "next/dynamic";
const Main = dynamic(() => import("@/components/layout/main/Main"));
const Footer = dynamic(() => import("@/components/layout/footer/Footer"));

export default function Home() {
  return (
    <div>
      <Main />
      <Footer />
    </div>
  );
}
