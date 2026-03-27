import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider, useModal } from '../contexts/ModalContext';
import BookingModal from './BookingModal';

function LayoutContent() {
  const { isBookingModalOpen, closeBookingModal } = useModal();
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#fafafa]">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}

export default function Layout() {
  return (
    <ModalProvider>
      <LayoutContent />
    </ModalProvider>
  );
}
