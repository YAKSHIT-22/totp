import React from 'react';
import TOTPAlgorithmImage from '../assets/totp_algorithm.webp'
const HowItWorks = () => {
  return (
    <div className="flex flex-col items-start justify-start p-6 space-y-6">
      <h1 className="text-4xl font-bold">How TOTP Works</h1>
      <p className="text-lg leading-relaxed">
        Time-based One-Time Password (TOTP) is a type of two-factor authentication (2FA) mechanism that generates a unique code based on a shared secret key and the current time. This code changes periodically, usually every 30 seconds, providing a higher level of security for user authentication.
      </p>

      <h2 className="text-3xl font-semibold">TOTP Algorithm</h2>
      <p className="text-lg leading-relaxed">
        The TOTP algorithm is a widely adopted standard specified in RFC 6238. It leverages the HMAC-based One-Time Password (HOTP) algorithm and includes a time component to ensure the passcodes are only valid for a short period. The algorithm follows these steps:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed">
        <li><strong>Secret Key:</strong> A shared secret key is established between the client (e.g., a smartphone app) and the server during the initial setup.</li>
        <li><strong>Current Time:</strong> The current time is divided into fixed-length intervals, typically 30 seconds.</li>
        <li><strong>HMAC Calculation:</strong> An HMAC-SHA1 hash is generated using the secret key and the current time interval.</li>
        <li><strong>Truncate and Format:</strong> The resulting hash is truncated and formatted into a 6-8 digit code.</li>
        <li><strong>Verification:</strong> The server generates its own TOTP using the shared secret key and current time, then compares it with the client's TOTP.</li>
      </ol>
      
      <div className="flex items-center justify-center mt-4">
        <img src={TOTPAlgorithmImage} alt="TOTP Algorithm" className="w-full max-w-xl shadow-lg rounded-lg" />
      </div>

      <h2 className="text-3xl font-semibold">Example: Generating a TOTP</h2>
      <p className="text-lg leading-relaxed">
        Let's go through a simple example of generating a TOTP code:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed">
        <li><strong>Secret Key:</strong> Assume the shared secret key is <code>JBSWY3DPEHPK3PXP</code>.</li>
        <li><strong>Current Time:</strong> The current time is <code>2024-07-14 10:00:00 UTC</code>.</li>
        <li><strong>Time Interval:</strong> Calculate the number of 30-second intervals since the Unix epoch: <code>(current_time - epoch) / 30</code>.</li>
        <li><strong>HMAC Calculation:</strong> Generate an HMAC-SHA1 hash using the secret key and the time interval.</li>
        <li><strong>Truncate and Format:</strong> Truncate the hash to obtain a 6-digit TOTP code, such as <code>123456</code>.</li>
      </ol>
      
      <h2 className="text-3xl font-semibold">Benefits of TOTP</h2>
      <p className="text-lg leading-relaxed">
        TOTP offers several advantages over static passwords:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
        <li><strong>Time-limited:</strong> Codes are valid for a short period, reducing the risk of being reused by an attacker.</li>
        <li><strong>Easy to Implement:</strong> Many libraries and tools are available to implement TOTP in various programming languages.</li>
        <li><strong>Widely Supported:</strong> TOTP is supported by many services and applications, making it a versatile choice for 2FA.</li>
      </ul>

      <h2 className="text-3xl font-semibold">Implementing TOTP</h2>
      <p className="text-lg leading-relaxed">
        Implementing TOTP involves generating and verifying the time-based one-time passwords. Here’s a basic example using JavaScript:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
{`const crypto = require('crypto');

function generateTOTP(secret, time = Date.now()) {
  const epoch = Math.floor(time / 1000);
  const timeStep = Math.floor(epoch / 30);
  const key = Buffer.from(secret, 'base32');
  const msg = Buffer.alloc(8);
  msg.writeUInt32BE(Math.floor(timeStep / 0x100000000), 0);
  msg.writeUInt32BE(timeStep & 0xffffffff, 4);
  const hmac = crypto.createHmac('sha1', key).update(msg).digest();
  const offset = hmac[hmac.length - 1] & 0xf;
  const code = (hmac.readUInt32BE(offset) & 0x7fffffff) % 1000000;
  return code.toString().padStart(6, '0');
}

const secret = 'JBSWY3DPEHPK3PXP';
const totpCode = generateTOTP(secret);
console.log('TOTP Code:', totpCode);`}
        </code>
      </pre>
      
      <h2 className="text-3xl font-semibold">Common Applications of TOTP</h2>
      <p className="text-lg leading-relaxed">
        TOTP is commonly used in various scenarios, including:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
        <li>Securing online accounts (e.g., email, social media, banking)</li>
        <li>VPN authentication</li>
        <li>Accessing enterprise systems</li>
        <li>Protecting developer tools and platforms (e.g., GitHub, AWS)</li>
      </ul>

      <h2 className="text-3xl font-semibold">Conclusion</h2>
      <p className="text-lg leading-relaxed">
        TOTP is a robust and effective method for enhancing security through time-based one-time passwords. Its time-limited, dynamic nature makes it significantly more secure than static passwords, providing a critical layer of security in various applications.
      </p>
    </div>
  );
};

export default HowItWorks;
