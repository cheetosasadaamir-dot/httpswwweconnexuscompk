import Layout from '@/components/Layout';
import EconomicsChatbot from '@/components/EconomicsChatbot';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Chat = () => {
  const [searchParams] = useSearchParams();
  const initialPersona = searchParams.get('subject') === 'physics' ? 'physics' : undefined;

  useEffect(() => {
    document.title = 'AI Tutor Chat — EconNexus';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Chat with EconNexus AI Tutors. 11 specialist personas across Economics, Business, Sciences, Law and more — board-aware, syllabus-aligned answers.');
  }, []);

  return (
    <Layout>
      <div className="w-full">
        <EconomicsChatbot fullScreen initialPersona={initialPersona} />
      </div>
    </Layout>
  );
};

export default Chat;
