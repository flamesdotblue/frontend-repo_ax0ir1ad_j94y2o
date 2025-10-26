import React from 'react';
import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: ['Up to 1,000 monthly active users', 'Basic analytics', 'Community support'],
    cta: 'Get started',
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: true,
    features: ['Up to 10,000 monthly active users', 'Usage-based billing', 'Email & chat support', 'Automation workflows'],
    cta: 'Start free trial',
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: false,
    features: ['Unlimited users', 'SLA & SSO', 'Dedicated CSM', 'Advanced security'],
    cta: 'Contact sales',
  },
];

function TierCard({ tier }) {
  return (
    <div
      className={
        'relative flex flex-col rounded-2xl border p-6 shadow-sm bg-white ' +
        (tier.highlight ? 'border-indigo-300 shadow-md' : 'border-slate-200')
      }
    >
      {tier.highlight && (
        <span className="absolute -top-2 left-6 inline-flex items-center rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-medium text-white shadow">Popular</span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
        <span className="ml-2 text-slate-500">{tier.period || tier.period === '' ? tier.period : '/mo'}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={
          'mt-8 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow ' +
          (tier.highlight
            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
            : 'border border-slate-300 text-slate-800 hover:bg-slate-50')
        }
      >
        {tier.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Start free, upgrade when you grow. No hidden fees.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
