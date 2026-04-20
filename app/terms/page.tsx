import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, Scale, AlertCircle, Mail, Gavel, UserX, Shield } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a3d3d] to-[#0d5555] text-white py-20 mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6 text-[#c9a961]" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
              <p className="text-xl text-gray-200">Please read these terms carefully before using our services.</p>
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
                    By accessing or using Regnara's website and services, you agree to comply with these Terms &
                    Conditions. These terms govern your use of our website, services, and any contractual relationships
                    for construction projects.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Please read these terms carefully before using our website or engaging our services. If you do not
                    agree with any part of these terms, you should not use our website or services.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Gavel className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Acceptance of Terms</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing this website or engaging Regnara for construction services, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms & Conditions. These terms apply to all
                    visitors, users, and clients of Regnara's services.
                  </p>
                </div>

                {/* Services */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Services</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara provides comprehensive construction, renovation, infrastructure, and related professional
                    services including but not limited to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Construction Services:</strong> Residential, commercial, and industrial building
                      construction.
                    </li>
                    <li>
                      <strong>Infrastructure Development:</strong> Roads, bridges, water systems, and public works.
                    </li>
                    <li>
                      <strong>Architecture & Planning:</strong> Design, planning, and structural engineering services.
                    </li>
                    <li>
                      <strong>Renovation & Maintenance:</strong> Building upgrades, repairs, and ongoing maintenance.
                    </li>
                    <li>
                      <strong>Material Supply:</strong> Sourcing and delivery of construction materials.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Project timelines, costs, and outcomes may vary based on site conditions, weather, regulatory
                    approvals, and client requirements. All projects are subject to separate contracts that outline
                    specific terms, deliverables, and payment schedules.
                  </p>
                </div>

                {/* Project Contracts */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Project Contracts & Agreements</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All construction projects require a formal written contract signed by both parties. The contract
                    will include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Detailed scope of work and project specifications</li>
                    <li>Project timeline and key milestones</li>
                    <li>Total project cost and payment schedule</li>
                    <li>Warranties, guarantees, and quality standards</li>
                    <li>Terms for changes, delays, and dispute resolution</li>
                    <li>Insurance and liability coverage</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    The project contract takes precedence over these general Terms & Conditions for project-specific
                    matters.
                  </p>
                </div>

                {/* User Responsibilities */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <UserX className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">User Responsibilities</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Accurate Information:</strong> Provide accurate, complete, and up-to-date project and
                      contact information.
                    </li>
                    <li>
                      <strong>Lawful Use:</strong> Use the website and services only for lawful purposes and in
                      accordance with these terms.
                    </li>
                    <li>
                      <strong>Site Access:</strong> Provide safe and timely site access for project execution and
                      inspections.
                    </li>
                    <li>
                      <strong>Permits & Approvals:</strong> Assist in obtaining necessary permits, approvals, and
                      clearances as required.
                    </li>
                    <li>
                      <strong>Payment:</strong> Make timely payments according to agreed schedules and terms.
                    </li>
                    <li>
                      <strong>No Misuse:</strong> Do not attempt to harm, disrupt, or interfere with the website,
                      services, or other users.
                    </li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All content on this website, including text, graphics, logos, images, designs, videos, and software,
                    is the intellectual property of Regnara and is protected by copyright, trademark, and other
                    intellectual property laws.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      You may not copy, reproduce, distribute, or create derivative works without written permission.
                    </li>
                    <li>
                      The Regnara name, logo, and branding are registered trademarks and may not be used without
                      authorization.
                    </li>
                    <li>
                      Project designs and architectural plans remain Regnara's property unless ownership transfer is
                      specified in the contract.
                    </li>
                    <li>Unauthorized use of our intellectual property may result in legal action.</li>
                  </ul>
                </div>

                {/* Payment Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Payment Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Payment terms are outlined in individual project contracts. General payment guidelines include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Advance payment or deposit may be required before project commencement.</li>
                    <li>Progress payments are typically tied to project milestones or phases.</li>
                    <li>Final payment is due upon project completion and client acceptance.</li>
                    <li>Late payments may incur interest charges or project suspension.</li>
                    <li>All payments must be made via authorized payment methods specified in the contract.</li>
                  </ul>
                </div>

                {/* Warranties and Quality Assurance */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Warranties & Quality Assurance</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara is committed to delivering high-quality construction services. Our warranty commitments
                    include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Structural warranty typically covers 5-10 years depending on the project type.</li>
                    <li>Workmanship warranty covers defects in construction for a period specified in the contract.</li>
                    <li>Material warranties are subject to manufacturer terms and conditions.</li>
                    <li>Warranty does not cover damage from misuse, natural disasters, or lack of maintenance.</li>
                    <li>Claims must be reported promptly with proper documentation for warranty coverage.</li>
                  </ul>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Limitation of Liability</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the maximum extent permitted by law, Regnara's liability is limited as follows:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      We are not liable for indirect, incidental, consequential, or punitive damages arising from the
                      use of our website or services.
                    </li>
                    <li>
                      Our total liability for any claim shall not exceed the total amount paid by the client for the
                      specific project in question.
                    </li>
                    <li>
                      We are not responsible for delays or failures caused by force majeure events, including natural
                      disasters, pandemics, strikes, or government actions.
                    </li>
                    <li>Website content is provided "as is" without warranties of any kind, express or implied.</li>
                    <li>We are not liable for third-party content, links, or services accessed through our website.</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r mt-4">
                    <p className="text-amber-900 text-sm">
                      <strong>Note:</strong> Some jurisdictions do not allow limitation of liability for certain types
                      of damages. In such cases, our liability will be limited to the maximum extent permitted by law.
                    </p>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Dispute Resolution</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In the event of any dispute arising from these terms or our services:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      Both parties agree to first attempt resolution through good-faith negotiation and mediation.
                    </li>
                    <li>
                      If mediation fails, disputes shall be resolved through binding arbitration in accordance with
                      applicable arbitration rules.
                    </li>
                    <li>
                      The arbitration shall be conducted in the jurisdiction where Regnara's principal office is
                      located.
                    </li>
                    <li>The decision of the arbitrator shall be final and binding on both parties.</li>
                  </ul>
                </div>

                {/* Service Changes & Termination */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Service Changes & Termination</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We reserve the right to update, modify, or discontinue services, website features, or content at any
                    time with or without notice. This includes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Adding or removing website features and functionality</li>
                    <li>Updating service offerings and pricing</li>
                    <li>Suspending or terminating user accounts that violate these terms</li>
                    <li>Temporarily restricting access for maintenance or upgrades</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Active project contracts will be honored according to their specific terms, even if general services
                    are modified or discontinued.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms & Conditions are governed by and construed in accordance with the laws of India. Any
                    legal action or proceeding arising from these terms shall be brought exclusively in the courts
                    having jurisdiction in the location of Regnara's registered office.
                  </p>
                </div>

                {/* Severability */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Severability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms & Conditions is found to be invalid, illegal, or unenforceable, the
                    remaining provisions shall continue in full force and effect. The invalid provision shall be
                    modified to the minimum extent necessary to make it valid and enforceable.
                  </p>
                </div>

                {/* Changes to These Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Changes to These Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Regnara reserves the right to modify these Terms & Conditions at any time. Changes will be
                    effective immediately upon posting on this page with an updated "Last Updated" date. Your continued
                    use of the website or services after changes constitutes acceptance of the modified terms. We
                    encourage you to review these terms periodically.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="bg-[#f5f1e8] border-l-4 border-[#c9a961] p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#c9a961] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Questions?</h3>
                      <p className="text-gray-700 mb-2">
                        For questions about our terms and conditions or service agreements, please contact:
                      </p>
                      <a
                        href="mailto:info@regnararealty.com"
                        className="text-[#c9a961] hover:text-[#0a3d3d] font-semibold transition-colors"
                      >
                        info@regnararealty.com
                      </a>
                      <p className="text-gray-600 text-sm mt-3">
                        Our team will be happy to clarify any terms or discuss project-specific agreements.
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

