'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatApp from '../components/ChatApp';


export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
    
      <main className="flex-grow">
        <ChatApp/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
