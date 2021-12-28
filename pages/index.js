import { Meta, Footer } from '../components/Global';
import { Hero, Board, Greating, Registration, Programs, Teachers } from 'components';

export default function Home() {
  return (
    <>
      <Meta />
      <Hero route='/' />
      <Registration/>
      <Greating/>
      <Programs/>
      <Teachers/>
      {/* <OurMenu />
      <NewsletterComponent />
      <SpecialInfoComponent /> */}
      <Footer />
      {/* <FloatingWhatsapp /> */}
    </>
  );
}
