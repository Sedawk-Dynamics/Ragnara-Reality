import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Lock, UserCheck, Mail, Eye, Database, RefreshCw } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a3d3d] to-[#0d5555] text-white py-20 mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-[#c9a961]" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-200">
                Your privacy is important to us. Learn how we protect your personal information.
              </p>
              <p className="text-sm text-gray-300 mt-4">Last updated: November 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Regnara respects your privacy and is committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, store, and protect your data when you use our website
                    and services.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    We understand that when you entrust us with your construction projects, you also entrust us with
                    sensitive personal and project information. This policy outlines our commitment to handling your
                    data responsibly and transparently in compliance with applicable data protection laws.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Information We Collect</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">Personal Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Contact Details:</strong> Name, email address, phone number, and mailing address when you
                      contact us, request quotes, or engage our services.
                    </li>
                    <li>
                      <strong>Project Information:</strong> Property details, project specifications, budget
                      requirements, and timelines you provide during consultations.
                    </li>
                    <li>
                      <strong>Business Information:</strong> Company name, designation, and business contact details for
                      commercial clients.
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">
                    Automatically Collected Information
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type and version, operating system, device
                      information, and referral sources.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages visited, time spent on pages, navigation paths, click patterns,
                      and interaction with website features.
                    </li>
                    <li>
                      <strong>Cookies:</strong> We use cookies to enhance user experience, analyze site traffic, and
                      remember your preferences.
                    </li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">How We Use Your Information</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Service Delivery:</strong> To respond to inquiries, prepare project proposals, execute
                      contracts, and deliver construction services as agreed.
                    </li>
                    <li>
                      <strong>Communication:</strong> To send project updates, service notifications, invoices, and
                      important announcements related to your projects.
                    </li>
                    <li>
                      <strong>Quality Improvement:</strong> To analyze website performance, understand user preferences,
                      and enhance our service offerings.
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, enforce
                      contracts, and maintain business records.
                    </li>
                    <li>
                      <strong>Marketing:</strong> To send relevant information about new services, project showcases,
                      and industry insights (only with your consent, and you may opt-out anytime).
                    </li>
                  </ul>
                </div>

                {/* Data Protection */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Data Protection & Security</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use industry-standard security measures to protect your information from unauthorized access,
                    misuse, alteration, or disclosure. Our security practices include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>SSL encryption for data transmission on our website.</li>
                    <li>Secure servers with restricted access controls and regular security audits.</li>
                    <li>Employee training on data privacy and confidentiality protocols.</li>
                    <li>Regular backup systems to prevent data loss.</li>
                    <li>Immediate incident response procedures in case of any security breach.</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r mt-4">
                    <p className="text-blue-900 text-sm">
                      <strong>Important:</strong> While we implement robust security measures, no method of transmission
                      over the internet is 100% secure. We cannot guarantee absolute security but continuously work to
                      protect your information.
                    </p>
                  </div>
                </div>

                {/* Data Storage and Retention */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Data Storage & Retention</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Your personal data is stored securely on our servers and third-party cloud services that comply with
                    international data protection standards. We retain your information only for as long as necessary to
                    fulfill the purposes outlined in this policy or as required by law.
                  </p>
                  <ul className="space-y-3 text-gray-700 mt-4">
                    <li>
                      <strong>Active Projects:</strong> Data is retained throughout the project lifecycle and for 7
                      years after completion for legal and warranty purposes.
                    </li>
                    <li>
                      <strong>Inquiries:</strong> Contact information from inquiries is retained for 2 years unless you
                      request earlier deletion.
                    </li>
                    <li>
                      <strong>Marketing:</strong> Marketing communications data is retained until you unsubscribe or
                      request deletion.
                    </li>
                  </ul>
                </div>

                {/* Third-Party Sharing */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Third-Party Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara does not sell, trade, or rent your personal data to third parties. We may share
                    information only in the following circumstances:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Service Providers:</strong> With trusted vendors and contractors who assist in delivering
                      our services (e.g., suppliers, subcontractors) under strict confidentiality agreements.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law, court orders, or government authorities
                      to comply with legal processes.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred to the new entity.
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> We may share information with third parties when you
                      explicitly authorize us to do so.
                    </li>
                  </ul>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Your Rights</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under data protection laws, you have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.
                    </li>
                    <li>
                      <strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information.
                    </li>
                    <li>
                      <strong>Right to Deletion:</strong> Request deletion of your personal data, subject to legal
                      retention requirements.
                    </li>
                    <li>
                      <strong>Right to Restrict Processing:</strong> Request limitation on how we use your data in
                      certain circumstances.
                    </li>
                    <li>
                      <strong>Right to Data Portability:</strong> Request transfer of your data to another service
                      provider in a structured format.
                    </li>
                    <li>
                      <strong>Right to Object:</strong> Object to processing of your data for marketing purposes or
                      based on legitimate interests.
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time where
                      consent was the basis for processing.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    To exercise any of these rights, please contact us at info@regnararealty.com. We will respond to your
                    request within 30 days.
                  </p>
                </div>

                {/* Cookies Policy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Cookies Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on
                    your device that help us:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Improve website functionality and performance</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    You can control cookie settings through your browser preferences. However, disabling cookies may
                    affect your ability to use certain features of our website.
                  </p>
                </div>

                {/* Changes to Privacy Policy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Regnara reserves the right to update this Privacy Policy to reflect changes in our practices or
                    legal requirements. We will notify you of any significant changes by posting the updated policy on
                    this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="bg-[#f5f1e8] border-l-4 border-[#c9a961] p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#c9a961] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Contact Us</h3>
                      <p className="text-gray-700 mb-2">
                        For privacy-related questions, data access requests, or concerns, please contact:
                      </p>
                      <a
                        href="mailto:info@regnararealty.com"
                        className="text-[#c9a961] hover:text-[#0a3d3d] font-semibold transition-colors"
                      >
                        info@regnararealty.com
                      </a>
                      <p className="text-gray-600 text-sm mt-3">
                        We are committed to addressing your privacy concerns promptly and transparently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


