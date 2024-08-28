import React from 'react';
    
const PrivacyPolicy = () => {
  return (
    <div className="p-8 font-sans bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: 24/08/2024</p>

      <p className="mb-6">
        Welcome to Easepix. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you use our application. Please read this policy carefully to understand our practices regarding your personal data and how we will treat it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>Personal Data:</strong> We may collect personally identifiable information, such as your name, email address, and other details necessary for authentication and providing services.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect information on how the service is accessed and used, such as IP address, browser type, operating system, and other analytics data.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">To provide and maintain our service.</li>
        <li className="mb-2">To manage your account and authenticate your identity.</li>
        <li className="mb-2">To improve our service and user experience.</li>
        <li className="mb-2">To communicate with you, including sending updates and notifications.</li>
        <li>To monitor usage and detect, prevent, and address technical issues.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
      <p className="mb-4">
        We may share your information with third parties in the following situations:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>With Service Providers:</strong> We may share your information with third-party vendors to help us operate, maintain, and improve our services.
        </li>
        <li>
          <strong>For Legal Reasons:</strong> We may disclose your information if required by law, or to protect and defend our rights and property.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
      <p className="mb-6">
        We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
      <p className="mb-6">
        You have the right to access, update, or delete your personal data. If you wish to exercise these rights, please contact us at <a href="mailto:gabrielmoraesweb@gmail.com" className="text-blue-600 underline">gabrielmoraesweb@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <p>Email: <a href="mailto:gabrielmoraesweb@gmail.com" className="text-blue-600 underline">gabrielmoraesweb@gmail.com</a></p>
    </div>
  );
};

export default PrivacyPolicy;
