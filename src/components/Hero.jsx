import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
              <Star className="h-3.5 w-3.5 fill-indigo-600 text-white" />
              Launch your SaaS in days, not months
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build, launch, and grow your SaaS without the busywork
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              SkyLaunch automates onboarding, billing, analytics, and customer support so you can focus on product.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">
                Book a demo
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-500">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-transparent pointer-events-none" />
              <div className="h-full w-full grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-700">Revenue</p>
                  <p className="mt-3 text-2xl font-bold">$42,930</p>
                  <p className="text-xs text-emerald-600 mt-1">+12.4% this month</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-700">Active users</p>
                  <p className="mt-3 text-2xl font-bold">3,284</p>
                  <p className="text-xs text-emerald-600 mt-1">+7.1% this week</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 col-span-2">
                  <p className="text-sm font-semibold text-slate-700">Recent signups</p>
                  <div className="mt-3 h-24 w-full rounded-md bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-emerald-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
