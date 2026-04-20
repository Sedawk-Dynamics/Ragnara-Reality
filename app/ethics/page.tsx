import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, CheckCircle2, Leaf, AlertTriangle, Mail, Users, Award, Shield } from "lucide-react"

export default function EthicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a3d3d] to-[#0d5555] text-white py-20 mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-[#c9a961]" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ethics Policy</h1>
              <p className="text-xl text-gray-200">Building with integrity, honesty, and responsibility.</p>
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
                    Regnara is committed to conducting business with honesty, safety, and integrity. We believe that
                    ethical practices are the foundation of sustainable success and positive community impact.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Our Ethics Policy outlines the principles and values that guide our operations, relationships with
                    stakeholders, and commitment to responsible construction practices. We hold ourselves and our
                    partners to the highest ethical standards in every project we undertake.
                  </p>
                </div>

                {/* Core Values */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Our Core Values</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Integrity:</strong> We conduct business with honesty, transparency, and accountability in
                      all dealings.
                    </li>
                    <li>
                      <strong>Quality:</strong> We are committed to delivering superior craftsmanship and exceeding
                      client expectations.
                    </li>
                    <li>
                      <strong>Safety:</strong> The safety and well-being of our workers, clients, and communities is our
                      top priority.
                    </li>
                    <li>
                      <strong>Respect:</strong> We treat all individuals with dignity, fairness, and respect regardless
                      of background or position.
                    </li>
                    <li>
                      <strong>Sustainability:</strong> We are dedicated to environmentally responsible practices that
                      protect our planet.
                    </li>
                  </ul>
                </div>

                {/* Our Commitments */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Our Commitments</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">Workplace Safety</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Maintain the highest standards of workplace safety with regular training and compliance.</li>
                    <li>Provide proper safety equipment and enforce safety protocols on all construction sites.</li>
                    <li>Conduct regular safety audits and risk assessments to prevent accidents.</li>
                    <li>Create a culture where every worker feels empowered to report safety concerns.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">Quality & Excellence</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      Deliver quality construction and infrastructure services that meet or exceed industry standards.
                    </li>
                    <li>Use certified materials and employ skilled professionals for all projects.</li>
                    <li>Implement rigorous quality control measures at every stage of construction.</li>
                    <li>Stand behind our work with comprehensive warranties and ongoing support.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">Legal & Regulatory Compliance</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Comply with all applicable laws, regulations, and building codes.</li>
                    <li>Obtain necessary permits, licenses, and approvals before commencing projects.</li>
                    <li>Maintain accurate records and documentation for all activities.</li>
                    <li>Cooperate fully with regulatory authorities and inspections.</li>
                  </ul>
                </div>

                {/* Fair Business Practices */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Fair Business Practices</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara has zero tolerance for corruption, bribery, discrimination, or unethical conduct in any
                    part of our operations. We are committed to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Anti-Corruption:</strong> Prohibiting bribes, kickbacks, or improper payments to any party
                      including government officials, clients, or suppliers.
                    </li>
                    <li>
                      <strong>Fair Competition:</strong> Competing fairly and ethically without engaging in
                      anti-competitive practices or collusion.
                    </li>
                    <li>
                      <strong>Honest Communication:</strong> Providing accurate information in bids, proposals, and
                      project communications without misrepresentation.
                    </li>
                    <li>
                      <strong>Conflict of Interest:</strong> Disclosing and managing potential conflicts of interest
                      transparently.
                    </li>
                    <li>
                      <strong>Fair Pricing:</strong> Offering competitive and transparent pricing without hidden costs
                      or deceptive practices.
                    </li>
                  </ul>
                </div>

                {/* Equal Opportunity & Non-Discrimination */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Equal Opportunity & Non-Discrimination</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara is an equal opportunity employer committed to creating an inclusive and diverse workplace.
                    We prohibit discrimination based on:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Race, color, ethnicity, or national origin</li>
                    <li>Gender, gender identity, or sexual orientation</li>
                    <li>Religion or belief systems</li>
                    <li>Age or disability status</li>
                    <li>Marital status or family responsibilities</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    All hiring, promotion, and employment decisions are based on qualifications, skills, and
                    performance. We provide equal pay for equal work and ensure fair treatment for all employees,
                    contractors, and stakeholders.
                  </p>
                </div>

                {/* Labor Rights & Worker Welfare */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Labor Rights & Worker Welfare</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are committed to protecting the rights and welfare of all workers involved in our projects:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Fair Wages:</strong> Pay fair wages that meet or exceed minimum wage laws and industry
                      standards.
                    </li>
                    <li>
                      <strong>Working Hours:</strong> Respect reasonable working hours with adequate rest periods and
                      overtime compensation.
                    </li>
                    <li>
                      <strong>No Forced Labor:</strong> Prohibit forced labor, child labor, or any form of human
                      trafficking.
                    </li>
                    <li>
                      <strong>Worker Benefits:</strong> Provide health insurance, leave benefits, and other welfare
                      measures as per regulations.
                    </li>
                    <li>
                      <strong>Training & Development:</strong> Invest in worker training, skill development, and career
                      advancement opportunities.
                    </li>
                    <li>
                      <strong>Grievance Mechanism:</strong> Maintain accessible channels for workers to raise concerns
                      without fear of retaliation.
                    </li>
                  </ul>
                </div>

                {/* Environmental Responsibility */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">Environmental Responsibility</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara recognizes the environmental impact of construction activities and is committed to
                    minimizing our ecological footprint through:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Sustainable Materials:</strong> Prioritizing eco-friendly, recycled, and locally sourced
                      materials whenever possible.
                    </li>
                    <li>
                      <strong>Waste Reduction:</strong> Implementing waste management plans to reduce, reuse, and
                      recycle construction waste.
                    </li>
                    <li>
                      <strong>Energy Efficiency:</strong> Designing energy-efficient buildings and using renewable
                      energy sources where feasible.
                    </li>
                    <li>
                      <strong>Water Conservation:</strong> Adopting water-saving technologies and responsible water
                      management practices.
                    </li>
                    <li>
                      <strong>Pollution Control:</strong> Minimizing air, water, and noise pollution during construction
                      activities.
                    </li>
                    <li>
                      <strong>Green Building:</strong> Pursuing green building certifications and sustainable
                      construction methods.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We are committed to building a greener future and continuously improving our environmental
                    performance through innovation and best practices.
                  </p>
                </div>

                {/* Community Engagement */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">
                    Community Engagement & Social Responsibility
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regnara believes in giving back to the communities where we operate:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>CSR Initiatives:</strong> Supporting education, healthcare, skill development, and
                      community infrastructure projects.
                    </li>
                    <li>
                      <strong>Local Employment:</strong> Prioritizing local hiring and supporting local businesses and
                      suppliers.
                    </li>
                    <li>
                      <strong>Community Consultation:</strong> Engaging with local communities on projects that may
                      impact them and addressing concerns.
                    </li>
                    <li>
                      <strong>Minimizing Disruption:</strong> Taking measures to minimize noise, traffic, and other
                      disruptions to neighboring communities.
                    </li>
                  </ul>
                </div>

                {/* Supply Chain Ethics */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Supply Chain Ethics</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We expect our suppliers, subcontractors, and business partners to uphold similar ethical standards:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Compliance with labor laws and human rights standards</li>
                    <li>Fair and ethical business practices without corruption</li>
                    <li>Commitment to quality, safety, and environmental responsibility</li>
                    <li>Transparent operations and accurate reporting</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We conduct due diligence on our partners and reserve the right to terminate relationships with those
                    who violate ethical standards.
                  </p>
                </div>

                {/* Reporting Concerns */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#c9a961]" />
                    <h2 className="text-2xl font-bold text-[#0a3d3d] m-0">
                      Reporting Concerns & Whistleblower Protection
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you witness or suspect any unethical behavior, safety violations, legal non-compliance, or other
                    concerns related to Regnara's operations, we strongly encourage you to report it.
                  </p>

                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">How to Report</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Contact your immediate supervisor or manager</li>
                    <li>Email our Ethics & Compliance team at: info@regnararealty.com</li>
                    <li>Submit an anonymous report through our whistleblower hotline (if available)</li>
                    <li>Escalate to senior management or the board if necessary</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#0a3d3d] mt-6 mb-3">Whistleblower Protection</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      All reports are treated confidentially to the extent possible under applicable laws and
                      investigation needs.
                    </li>
                    <li>We prohibit retaliation against anyone who reports concerns in good faith.</li>
                    <li>Anonymous reporting is supported to encourage disclosure without fear of identification.</li>
                    <li>All reports are investigated thoroughly, fairly, and promptly by appropriate personnel.</li>
                    <li>
                      Appropriate action is taken against those found to have engaged in unethical or illegal conduct.
                    </li>
                  </ul>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r mt-4">
                    <p className="text-amber-900 text-sm">
                      <strong>Note:</strong> Regnara protects whistleblowers from retaliation and ensures fair
                      investigation of all ethical concerns. False or malicious reports made in bad faith may result in
                      disciplinary action.
                    </p>
                  </div>
                </div>

                {/* Training & Awareness */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Ethics Training & Awareness</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Regnara provides regular ethics training to all employees, contractors, and partners to ensure
                    awareness and understanding of our ethical standards. Training covers topics including
                    anti-corruption, workplace safety, non-discrimination, environmental responsibility, and ethical
                    decision-making.
                  </p>
                </div>

                {/* Enforcement & Accountability */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0a3d3d] mb-4">Enforcement & Accountability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Violations of this Ethics Policy may result in:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li>Disciplinary action including warnings, suspension, or termination of employment</li>
                    <li>Termination of contracts with suppliers, subcontractors, or business partners</li>
                    <li>Legal action and reporting to law enforcement authorities where applicable</li>
                    <li>Recovery of damages and costs associated with the violation</li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="bg-[#f5f1e8] border-l-4 border-[#c9a961] p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#c9a961] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0a3d3d] mb-2">Report Ethical Concerns</h3>
                      <p className="text-gray-700 mb-2">
                        Any ethical concerns, violations, or questions about our Ethics Policy can be reported
                        confidentially by contacting:
                      </p>
                      <a
                        href="mailto:info@regnararealty.com"
                        className="text-[#c9a961] hover:text-[#0a3d3d] font-semibold transition-colors"
                      >
                        info@regnararealty.com
                      </a>
                      <p className="text-gray-600 text-sm mt-3">
                        We take all reports seriously and are committed to maintaining the highest ethical standards in
                        our operations. Your voice matters in building a culture of integrity.
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


