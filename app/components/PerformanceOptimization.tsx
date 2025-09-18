import Head from 'next/head';

export default function PerformanceOptimization() {
  return (
    <Head>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/logo.jpg" as="image" type="image/jpeg" />
      
      {/* Resource hints */}
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/contact" />
    </Head>
  );
}
