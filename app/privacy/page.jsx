import React from 'react'

export default function Privacy(){
    return (
        <div className="max-w-3xl mx-auto p-6 text-white bg-black rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">1. Introduction</h2>
            <p>
              This website is a <strong>learning project</strong> created for educational purposes. By using this site, you acknowledge that it is not a professional or commercial service, and all content is provided as-is without any guarantees.
            </p>
          </section>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">2. Information Usage</h2>
            <ul className="list-disc list-inside">
              <li>The site allows users to submit opinions and information.</li>
              <li>
                Any information provided is user-generated, and the <strong>site creator is not responsible</strong> for the accuracy, validity, or reliability of submitted content.
              </li>
            </ul>
          </section>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">3. Responsibility Disclaimer</h2>
            <ul className="list-disc list-inside">
              <li>
                If someone submits incorrect, misleading, or false information, the <strong>creator of this site is not liable</strong> for any consequences.
              </li>
              <li>
                Users are responsible for ensuring that any content they submit is accurate and does not violate any privacy laws or ethical guidelines.
              </li>
            </ul>
          </section>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">4. Data Collection & Storage</h2>
            <ul className="list-disc list-inside">
              <li>No sensitive personal data is collected or stored.</li>
              <li>Any submitted information may be publicly visible and is not monitored or verified.</li>
            </ul>
          </section>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">5. Third-Party Liability</h2>
            <ul className="list-disc list-inside">
              <li>This site does not share user data with third parties.</li>
              <li>The creator is not responsible for any third-party use of the information displayed on the site.</li>
            </ul>
          </section>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">6. Changes to This Policy</h2>
            <p>
              Since this is a learning project, this Privacy Policy may be updated as needed. Continued use of the site after changes implies acceptance of the updated policy.
            </p>
          </section>
    
          <section className="mb-4">
            <h2 className="text-xl font-bold text-red-600">7. Contact</h2>
            <p>
              For any concerns, please discontinue use of the site, as this is a non-commercial project with no dedicated support.
            </p>
          </section>
        </div>
      );
}
