import { Meta, Footer } from '../components/Global';
import { Hero, Board, Greating } from 'components';

export default function Home() {
  return (
    <>
      <Meta />
      <Hero route='/' />
      <Board/>
      <Greating/>
      {/* <OurMenu />
      <NewsletterComponent />
      <SpecialInfoComponent /> */}
      {/* <Footer /> */}
      {/* <FloatingWhatsapp /> */}
    </>
  );
}
