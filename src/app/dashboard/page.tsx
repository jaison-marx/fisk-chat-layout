'use client';
import Header from '../components/Header';
import Chat from '../components/Chat';
import Footer from '../components/Footer';


export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="flex-grow">
        <Chat/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
