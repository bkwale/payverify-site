"use client";

import { useState } from "react";
import { LogoFull, LogoIcon } from "./components/Logo";
import {
  Shield,
  QrCode,
  Smartphone,
  Building2,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  AlertTriangle,
  Eye,
  EyeOff,
  UserX,
  Mail,
  MapPin,
  Landmark,
  ScanLine,
  ClipboardCheck,
  Globe,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <LogoFull />
            <div className="hidden lg:flex items-center gap-8">
              <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                The Problem
              </a>
              <a href="#solution" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Our Solution
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#market" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Market
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
            {[
              { href: "#problem", label: "The Problem" },
              { href: "#solution", label: "Our Solution" },
              { href: "#how-it-works", label: "How It Works" },
              { href: "#market", label: "Market" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            >
              Get Early Access
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Merchant Payment Validation for Nigeria
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Pay with{" "}
                <span className="gradient-text">confidence.</span>
                <br />
                Verify with{" "}
                <span className="gradient-text">trust.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Staff diverting payments to personal accounts costs Nigerian
                businesses billions. PayVerify validates that every payment
                reaches the merchant&apos;s official, verified account — before
                the money moves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#problem"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-base font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-10 animate-float">
                <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 p-8 border border-gray-100 max-w-sm mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <LogoIcon className="w-8 h-8 text-primary" />
                    <span className="font-semibold text-gray-900">PayVerify</span>
                    <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      Verified
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 flex items-center justify-center">
                    <div className="w-32 h-32 relative">
                      <QrCode className="w-full h-full text-gray-800" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Merchant</span>
                      <span className="font-medium text-gray-900">Jollof Express Ltd</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Account</span>
                      <span className="font-medium text-gray-900">Official &#10003;</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Status</span>
                      <span className="font-medium text-green-600">Verified &amp; Authorised</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your staff could be{" "}
              <span className="text-red-500">diverting your revenue</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In staff-operated businesses across Nigeria, a recurring pattern of
              payment diversion goes undetected — costing merchants billions in
              lost revenue every year.
            </p>
          </div>

          {/* Fraud types */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <UserX className="w-8 h-8" />,
                title: "Staff POS Fraud",
                desc: "Rogue employees register personal POS machines or tell customers \u201Cour POS is down\u201D — then redirect payments to their own accounts that mimic the business name.",
              },
              {
                icon: <EyeOff className="w-8 h-8" />,
                title: "Undetected Revenue Leakage",
                desc: "Business owners have no visibility into whether payments actually reached their official account. Diversions can go unnoticed for weeks or months before anyone catches on.",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "No Preventive Control",
                desc: "Current banking controls only catch fraud after settlement. Nothing verifies that the payment destination presented to a customer is actually authorised by the merchant.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                stat: "63%",
                label: "of Nigerian merchants report experiencing internal payment fraud",
              },
              {
                stat: "\u20A62.4T",
                label: "in digital payments flow through Nigeria annually \u2014 with no merchant-layer validation",
              },
              {
                stat: "40M+",
                label: "registered businesses where staff handle payment collection daily",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold mb-2 gradient-text">
                  {item.stat}
                </div>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Our Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Merchant-layer payment validation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PayVerify introduces an independent verification step before
              payment — ensuring every payment instruction originates from an
              approved merchant source. Staff cannot substitute their own details.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <QrCode className="w-6 h-6" />,
                title: "Verified QR Codes",
                desc: "Each merchant is issued a secure QR code tied to their official, verified bank account. Tamper-proof — impossible for staff to forge or substitute.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: <ClipboardCheck className="w-6 h-6" />,
                title: "Merchant Verification",
                desc: "Merchants onboarded via CAC, TIN, BVN, and bank account ownership checks. Only verified businesses receive a PayVerify code.",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: <ScanLine className="w-6 h-6" />,
                title: "Pre-Payment Validation",
                desc: "Verification happens before payment, not after. Customers see the official merchant name and account details before transferring a single naira.",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Real-Time Dashboard",
                desc: "Merchant tracks all payments from approved devices and sources only. Full audit trail — every transaction attributable and visible to the business owner.",
                color: "bg-orange-50 text-orange-600",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Bank-Agnostic",
                desc: "Works with any bank or wallet. Customers pay via their preferred method. PayVerify doesn\u2019t alter existing bank clearing or switching infrastructure.",
                color: "bg-teal-50 text-teal-600",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Staff Accountability",
                desc: "All staff actions are attributable and auditable. Removes discretionary control at the merchant\u2013staff interaction layer where diversion happens.",
                color: "bg-yellow-50 text-yellow-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How PayVerify Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three steps to eliminate staff payment diversion
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-primary to-accent" />
            {[
              {
                step: "01",
                icon: <ClipboardCheck className="w-8 h-8" />,
                title: "Merchant Setup",
                desc: "Merchant is registered and verified via CAC, TIN, BVN, and bank account ownership. Issued a secure PayVerify QR code linked to their official account.",
              },
              {
                step: "02",
                icon: <Smartphone className="w-8 h-8" />,
                title: "Customer Scans & Verifies",
                desc: "Customer scans the QR from a receipt, invoice, or in-store display. Instantly sees the verified merchant name and official account details. No staff can override this.",
              },
              {
                step: "03",
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Verified Payment",
                desc: "Customer pays via any bank or wallet. Both parties receive a verified receipt. The merchant dashboard tracks all payments from approved sources only.",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-primary/25">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-primary mb-2 tracking-widest">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for everyone in the payment chain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a business owner, a customer, or a financial
              institution — PayVerify creates trust for all parties.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "For Business Owners",
                points: [
                  "Stop staff from diverting your revenue",
                  "Every payment verified against your official account",
                  "Full visibility into all transactions",
                  "Real-time dashboard with audit trail",
                  "Payments tracked from approved devices only",
                ],
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "For Customers",
                points: [
                  "Know you\u2019re paying the right account",
                  "Scan QR to see verified merchant details",
                  "Pay via any bank or wallet",
                  "Verified receipt for every transaction",
                  "Protection from staff-redirected payments",
                ],
              },
              {
                icon: <Landmark className="w-8 h-8" />,
                title: "For Banks & Regulators",
                points: [
                  "Proactive upstream risk management",
                  "Reduce fraud-related disputes and chargebacks",
                  "Regulatory alignment with CBN & NQR frameworks",
                  "New revenue via SME onboarding & API licensing",
                  "Compliance-ready audit documentation",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Market Opportunity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Africa&apos;s fastest-growing digital economy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nigeria is the largest economy in Africa with a young, tech-savvy
              population rapidly adopting digital payments — but without the
              merchant-layer controls to match.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { stat: "$50B", label: "Projected fintech market by 2030" },
              { stat: "200M+", label: "Population, 60% under 25" },
              { stat: "40M+", label: "Registered businesses nationwide" },
              { stat: "300%", label: "Growth in digital payments (2019\u20132024)" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold mb-2 gradient-text">
                  {item.stat}
                </div>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why PayVerify Wins
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "First-Mover Advantage",
                      desc: "No existing player provides merchant-layer payment validation in Nigeria. PayVerify is the first preventive control at the staff\u2013customer interaction point.",
                    },
                    {
                      title: "Bank Partnerships",
                      desc: "Working directly with banks and financial institutions to bring merchant-layer validation to their customers.",
                    },
                    {
                      title: "Regulatory Tailwind",
                      desc: "CBN\u2019s cashless economy push and NQR framework compliance create natural demand for merchant-layer validation.",
                    },
                    {
                      title: "Built for Scale",
                      desc: "Sustainable revenue model designed to grow with the Nigerian digital payments ecosystem from day one.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    What&apos;s Next
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    PayVerify is actively expanding its product capabilities
                    beyond verification — with new features in development for
                    merchants, banks, and regulators across Nigeria.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Partner With Us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to protect your merchant payments?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            PayVerify is building the preventive control layer for Nigerian
            merchant payments. Be among the first businesses and bank partners
            to join.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get in touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you&apos;re a business owner, bank, investor, or
                technology partner — we&apos;d love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">hello@payverify.ng</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll be in touch shortly.");
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I am a...
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option>Merchant / Business Owner</option>
                    <option>Bank / Financial Institution</option>
                    <option>Investor</option>
                    <option>POS Aggregator</option>
                    <option>Technology Partner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LogoIcon className="w-8 h-8 text-primary" />
                <span className="text-lg font-bold">PayVerify</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Merchant-layer payment validation for Nigeria. Preventing staff
                payment diversion with verified QR codes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#solution" className="hover:text-white transition-colors">
                    Our Solution
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Merchant Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#market" className="hover:text-white transition-colors">
                    Market
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AML Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2025 PayVerify. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built in Lagos, Nigeria.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
