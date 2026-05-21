import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-28">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <p className="text-gray-600 dark:text-neutral-400 mb-8">
          Last updated: May 20, 2026
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Thea Apps Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what data the Thea light meter application (the &quot;App&quot;) handles, and confirms that we do not collect, transmit, or store any of your personal data on our servers.
            </p>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Please read this Privacy Policy carefully. By using the App, you agree to the practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Thea is designed to work entirely on your device. We — Thea Apps Inc. — do <strong>not</strong> collect, transmit, or store any of your personal data on our servers. The App does not include any analytics, advertising, or tracking SDKs. The following sections describe the limited types of data the App processes locally on your device.
            </p>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Camera and Sensor Data</h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              The App uses your device&apos;s camera to measure light levels for photography purposes. Live video frames are sampled in memory for light metering only — they are never written to disk and never transmitted to our servers or any third parties.
            </p>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Location Data</h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Thea can optionally attach your device&apos;s current location to individual shot log entries so you can review where each frame was metered. Location data is only collected when you grant location permission <strong>and</strong> explicitly use the shot log feature.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-neutral-400 mb-4 space-y-2">
              <li>Location data is stored only on your device, alongside the related shot log entry in the App&apos;s local storage.</li>
              <li>Location data is <strong>never</strong> transmitted to our servers (we do not operate any) or to any third party.</li>
              <li>You can decline location permission at install time or revoke it later in iOS Settings. Declining or revoking location has no effect on the App&apos;s metering functionality — only the per-shot location tag is disabled.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">App Content You Create</h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Any content you create or configure in the App — including camera profiles, lenses, films, shot logs, and rolls — is stored only on your device in the App&apos;s local storage. None of this data leaves your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How the App Uses Your Information</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              All data described above is used exclusively on your device, for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-neutral-400 mb-4 space-y-2">
              <li>To provide and maintain the App&apos;s light metering functionality</li>
              <li>To save the camera profiles, lenses, films, shot logs, and rolls you choose to create</li>
              <li>To optionally tag shot log entries with the location at which they were recorded</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Storage and Security</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              All data the App handles — including light metering frames, location, and any content you create — stays on your device. We do not operate servers that receive or store your data. Data is protected by the standard iOS app sandbox and the device-level protections you have enabled (such as a passcode, Face ID, or Touch ID).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Thea does not integrate any third-party services, SDKs, analytics, advertising, or tracking. The App contains no networking code and does not communicate with any backend, ours or anyone else&apos;s.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-neutral-400 mb-4 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to or restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Future Data Collection</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              If we ever introduce features that involve collecting, transmitting, or sharing data (for example, crash reporting, optional cloud sync, or third-party AI services), we will:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-neutral-400 mb-4 space-y-2">
              <li>Update this Privacy Policy with clear disclosure of what data is collected, why, and with whom (if anyone) it is shared.</li>
              <li>Update the App Store privacy disclosures (&quot;App Privacy&quot; labels) to reflect the new behavior before the change ships in a public release.</li>
              <li>Where applicable, request your consent in-app at the time the new feature is first used.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact Thea Apps Inc. at:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-neutral-400 space-y-2">
              <li>
                Email:{' '}
                <ObfuscatedEmail
                  user="hello"
                  domain="thea.app"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                />
              </li>
              <li>
                Contact form:{' '}
                <a
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  thea.app/contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
  );
}
