import Image from "next/image";
import Header from "@/components/Header";
import Content from "@/components/Content";
import CenterSection from "@/components/CenterSection";
import ClientSection from "@/components/ClientSection";
import PricingSection from "@/components/PricingSection";
import Form from "@/components/Form";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main>
    <Header />
    <Content />
    <CenterSection />
    <ClientSection />
    <PricingSection />
    <BlogSection />
    <Form />
    <Footer />
   </main>
  );
}
