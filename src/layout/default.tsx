import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
  const description =
    "Assemble, configure, and deploy autonomous AI Agents in your browser.";
  return (
    <div className="flex min-h-screen min-h-screen flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]">
      <Head>
        <title>TeamGPT</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="@TeamGPT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TeamGPT 🤖" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://TeamGPT.doapply.ai/banner.png"
        />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta
          property="og:title"
          content="TeamGPT: Autonomous AI in your browser 🤖"
        />
        <meta
          property="og:description"
          content="Assemble, configure, and deploy autonomous AI Agents in your browser."
        />
        <meta property="og:url" content="https://TeamGPT.doapply.ai/" />
        <meta
          property="og:image"
          content="https://TeamGPT.doapply.ai/banner.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA"
        />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
          data-domain="TeamGPT.doapply.ai"
        />
      </Head>
      <DottedGridBackground>{props.children}</DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
