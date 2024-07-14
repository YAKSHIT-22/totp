import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WhatIsTOtp from '../../components/WhatIsTOtp';
import HowItWorks from '../../components/HowItWorks';
import ExecutionStates from '../../components/ExecutionStates';

const Docs = () => {
  const [selectedTab, setSelectedTab] = useState('What is TOTP?');

  const renderContent = () => {
    switch (selectedTab) {
      case 'What is TOTP?':
        return <WhatIsTOtp/>;
      case 'How It Works':
        return <HowItWorks/>;
      case 'Execution States':
        return <ExecutionStates/>;
      default:
        return null;
    }
  };

  return (
    <section className='flex items-start justify-start w-full min-h-[90dvh] h-full border-t'>
      <div className='flex items-start justify-start w-full h-full'>
        <div className='flex items-start justify-start w-[15%] p-2'>
          <div className='flex items-start justify-center w-full h-full flex-col p-2 gap-5'>
            <div className='flex items-center justify-center flex-col w-full p-2 mb-4'>
              <h1 className='text-xl font-bold'>Opt Auth</h1>
              <sub className='text-xs'>By Optmyzr</sub>
            </div>
            <div
              className='flex items-start justify-start p-2 pl-6 cursor-pointer'
              onClick={() => setSelectedTab('What is TOTP?')}
            >
              <h1 className={`text-lg ${selectedTab === 'What is TOTP?' ? 'font-semibold' : ''}`}>What is TOTP?</h1>
            </div>
            <div
              className='flex items-start justify-start p-2 pl-6 cursor-pointer'
              onClick={() => setSelectedTab('How It Works')}
            >
              <h1 className={`text-lg ${selectedTab === 'How It Works' ? 'font-semibold' : ''}`}>How It Works</h1>
            </div>
            <div
              className='flex items-start justify-start p-2 pl-6 cursor-pointer'
              onClick={() => setSelectedTab('Execution States')}
            >
              <h1 className={`text-lg ${selectedTab === 'Execution States' ? 'font-semibold' : ''}`}>Execution States</h1>
            </div>
            <div className='flex items-start justify-start p-2 pl-6'>
              <Link
                className={`text-lg`}
                to="/examples"
              >
                Examples
              </Link>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-[85%] p-2 border-l'>
          <div className='flex items-start justify-center flex-col w-full h-full'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full h-full'
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
