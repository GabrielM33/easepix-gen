import React from 'react';

const TermsOfService = () => {
  return (
    <div className="p-8 font-sans bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: 24/08/2024</p>

      <p className="mb-6">
        Welcome to Easepix. These Terms of Service govern your use of our
        application. By accessing or using Easepix, you agree to be bound by these terms.
        If you disagree with any part of the terms, you may not use our service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Use of Our Service</h2>
      <p className="mb-4">
        You must be at least 13 years old to use our service. By using Easepix, you
        represent and warrant that you have the legal capacity to enter into these terms.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">You agree not to use our service for any illegal or unauthorized purpose.</li>
        <li className="mb-2">You must not violate any laws in your jurisdiction while using our service.</li>
        <li className="mb-2">You are responsible for the security of your account and the activities that occur under your account.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
      <p className="mb-4">
        All content, features, and functionality on Easepix are the exclusive property of our company and are
        protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">You may not copy, modify, distribute, sell, or lease any part of our service without our written consent.</li>
        <li className="mb-2">You are granted a limited, non-exclusive, non-transferable license to access and use our service for personal, non-commercial use.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. Termination</h2>
      <p className="mb-6">
        We may terminate or suspend your account immediately, without prior notice or liability, for any reason
        whatsoever, including, without limitation, if you breach these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
      <p className="mb-6">
        In no event shall Easepix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
      <p className="mb-6">
        These terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Changes to These Terms</h2>
      <p className="mb-6">
        We reserve the right to modify or replace these terms at any time. If a revision is material, we will
        provide at least 30 days&apos; notice before any new terms take effect. By continuing to access or use our service
        after those revisions become effective, you agree to be bound by the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact us:
      </p>
      <p>Email: <a href="mailto:gabrielmoraesweb@gmail.com" className="text-blue-600 underline">gabrielmoraesweb@gmail.com</a></p>
    </div>
  );
};

export default TermsOfService;
