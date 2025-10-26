import React from 'react';
import { Shield, Zap, Users, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automation-first',
    desc: 'From onboarding to churn prevention, automate repetitive workflows and stay focused on your roadmap.',
  },
  {
    icon: CreditCard,
    title: 'Built-in billing',
    desc: 'Subscriptions, metered usage, discounts, and invoices with auto tax and dunning. Just connect your provider.',
  },
  {
    icon: Users,
    title: 'Customer success',
    desc: 'In-app messaging, knowledge base, and AI-assisted support to delight customers at every step.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SSO, audit logs, role-based access control, and data residency out of the box when you need it.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to scale</h2>
          <p className="mt-4 text-slate-600">Powerful building blocks that work beautifully together so you can ship faster.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow-md">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
