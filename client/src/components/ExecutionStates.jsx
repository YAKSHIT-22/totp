import React from 'react';
import { FaPlug, FaServer, FaUsers } from 'react-icons/fa';

const ExecutionStates = () => {
  return (
    <div className="flex flex-col items-start justify-start p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-6">Execution States</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

        <div className="bg-white  rounded-lg p-6 flex flex-col items-center text-center hover:shadow-none transition-all duration-500 shadow-[4px_5px_0_black]">
          <FaPlug className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Frontend Plugin</h2>
          <p className="text-lg leading-relaxed mb-4">
            Create a TOTP plugin that can be easily integrated into any frontend application. This plugin will provide users with a seamless two-factor authentication experience.
          </p>
          <button className="shadow-[2px_4px_0_black] text-black py-2 px-6 rounded-full border">Learn More</button>
        </div>

        <div className="bg-white  rounded-lg p-6 flex flex-col items-center text-center hover:shadow-none transition-all duration-500 shadow-[4px_5px_0_black]">
          <FaServer className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Backend API</h2>
          <p className="text-lg leading-relaxed mb-4">
            Develop a robust API that handles TOTP generation and verification. This API can be integrated into any backend system, providing secure authentication for users.
          </p>
          <button className="shadow-[2px_4px_0_black] text-black py-2 px-6 rounded-full border">Learn More</button>
        </div>

        <div className="bg-white  rounded-lg p-6 flex flex-col items-center text-center hover:shadow-none transition-all duration-500 shadow-[4px_5px_0_black]">
          <FaUsers className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">User Management App</h2>
          <p className="text-lg leading-relaxed mb-4">
            Build a comprehensive user management app that includes TOTP-based authentication. This app can be sold to companies looking for a complete user management solution.
          </p>
          <button className="shadow-[2px_4px_0_black] text-black py-2 px-6 rounded-full border">Learn More</button>
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-4">
        With the growing need for secure authentication methods, creating a TOTP package can be a lucrative business opportunity. Here’s how you can develop and sell your TOTP package:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed">
        <li><strong>Identify the Need:</strong> Understand the specific needs of your target market, whether it's frontend developers, backend developers, or businesses needing a full user management system.</li>
        <li><strong>Develop the Package:</strong> Create a versatile TOTP package that includes plugins for frontend, APIs for backend, and a complete user management app.</li>
        <li><strong>Ensure Security:</strong> Implement robust security measures to protect the shared secret key and the generated TOTP codes.</li>
        <li><strong>Documentation:</strong> Provide comprehensive documentation that guides users on how to integrate and use your TOTP package.</li>
        <li><strong>Market and Sell:</strong> Promote your TOTP package through various channels such as developer communities, online marketplaces, and direct sales to companies.</li>
        <li><strong>Provide Support:</strong> Offer excellent customer support to help users integrate and troubleshoot your TOTP package.</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-12">Conclusion</h2>
      <p className="text-lg leading-relaxed">
        By creating a TOTP package that includes plugins for frontend, APIs for backend, and a comprehensive user management app, you can cater to a wide range of customers and capitalize on the increasing demand for secure authentication solutions.
      </p>
    </div>
  );
};

export default ExecutionStates;
