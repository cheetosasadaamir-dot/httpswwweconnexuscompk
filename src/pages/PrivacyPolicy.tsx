import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
 Breadcrumb,
 BreadcrumbList,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbSeparator,
 BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const PrivacyPolicy =  => {
 return (
 <div className="min-h-screen bg-background text-foreground">
 {/* Header */}
 <div className="border-b border-silver/10">
 <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
 <Breadcrumb>
 <BreadcrumbList>
 <BreadcrumbItem>
 <BreadcrumbLink asChild>
 <Link to="/" className="text-neon-cyan hover:text-neon-cyan/80">Home</Link>
 </BreadcrumbLink>
 </BreadcrumbItem>
 <BreadcrumbSeparator />
 <BreadcrumbItem>
 <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
 </BreadcrumbItem>
 </BreadcrumbList>
 </Breadcrumb>
 </div>
 </div>

 <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
 {/* Back Link */}
 <Link
 to="/"
 className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-cyan/80 transition-colors mb-10"
 >
 <ArrowLeft className="w-4 h-4" />
 Back to Home
 </Link>

 <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
 Privacy Policy
 </h1>
 <p className="text-sm text-muted-foreground mb-12">
 Last updated: 9 March 2026
 </p>

 <div className="space-y-10 text-[15px] leading-[1.85] text-muted-foreground">
 {/* 1 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
 <p>
 EconNexus ("Platform", "we", "us", or "our") is committed to protecting the privacy and personal data of all users. This Privacy Policy explains how we collect, use, store, and protect your information when you access or use our services, including AI tutoring personas, revision notes, diagram banks, and associated features.
 </p>
 </section>

 {/* 2 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
 <p>We may collect the following categories of information:</p>
 <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
 <li><strong className="text-foreground">Account Information:</strong> Email address and display name provided during registration.</li>
 <li><strong className="text-foreground">Usage Data:</strong> Pages visited, features accessed, session duration, and interaction patterns to improve the Platform experience.</li>
 <li><strong className="text-foreground">Chat & Input Data:</strong> Queries submitted to AI personas are transiently processed to generate responses. These are not permanently stored or used for model training unless explicitly stated.</li>
 <li><strong className="text-foreground">Device Information:</strong> Browser type, operating system, screen resolution, and IP address for security and analytics purposes.</li>
 </ul>
 </section>

 {/* 3 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
 <p>Your information is used solely for the following purposes:</p>
 <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
 <li>To provide, maintain, and improve the Platform's educational services.</li>
 <li>To generate personalised AI responses during your session.</li>
 <li>To ensure system security and prevent abuse or unauthorised access.</li>
 <li>To analyse aggregate usage patterns and improve content quality.</li>
 <li>To communicate important updates regarding the Platform or these policies.</li>
 </ul>
 </section>

 {/* 4 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">4. Data Storage & Retention</h2>
 <p>
 We employ industry-standard security measures to protect your data, including encryption in transit and at rest. Personal data is retained only for as long as necessary to fulfil the purposes outlined in this policy. Chat session data is processed transiently and is not permanently stored on our servers.
 </p>
 </section>

 {/* 5 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">5. Data Sharing & Third Parties</h2>
 <p>
 EconNexus does <strong className="text-foreground">not</strong> sell, trade, or rent your personal information to third parties. We may share data only in the following circumstances:
 </p>
 <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
 <li>With trusted service providers who assist in operating the Platform (e.g., hosting, analytics), bound by confidentiality agreements.</li>
 <li>When required by law, regulation, or legal process.</li>
 <li>To protect the rights, safety, or property of EconNexus, its users, or the public.</li>
 </ul>
 </section>

 {/* 6 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">6. Cookies & Tracking</h2>
 <p>
 The Platform may use essential cookies and local storage to maintain session state and user preferences. We do not use third-party advertising cookies. Analytics data is collected in aggregate form and does not personally identify individual users.
 </p>
 </section>

 {/* 7 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
 <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
 <ul className="list-disc list-inside mt-3 space-y-1.5 pl-2">
 <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
 <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
 <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
 <li><strong className="text-foreground">Objection:</strong> Object to certain processing activities where applicable.</li>
 </ul>
 <p className="mt-3">
 To exercise any of these rights, please reach out to us through the Platform.
 </p>
 </section>

 {/* 8 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
 <p>
 EconNexus is designed for students and educators. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have inadvertently collected data from a child under 13, we will take steps to delete such information promptly.
 </p>
 </section>

 {/* 9 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
 <p>
 We reserve the right to update this Privacy Policy at any time. Material changes will be communicated via the Platform. Continued use of the Platform after such changes constitutes acceptance of the revised policy.
 </p>
 </section>

 {/* 10 */}
 <section>
 <h2 className="font-serif text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
 <p>
 This Privacy Policy shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising under this policy shall be subject to the exclusive jurisdiction of the courts of Pakistan.
 </p>
 </section>
 </div>
 </main>
 </div>
 );
};

export default PrivacyPolicy;
