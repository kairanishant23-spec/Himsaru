'use client';

import React, { useState } from 'react';
import { MOUNTAIN_RITUALS } from '@/data/soulContent';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function MountainRitual() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = MOUNTAIN_RITUALS.find((r) => r.step === activeStep) || MOUNTAIN_RITUALS[0];

  return (
    <section id="bilona" className="py-20 bg-warm/60 border-y border-mist/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-honey font-bold block mb-2">
            Ancestral Wisdom
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest mb-4">
            From Sacred Meadows <span className="italic font-normal">to Jar</span>
          </h2>
          <p className="text-sm sm:text-base text-stone">
            Click through the 4 sacred steps of authentic Vedic Bilona craftsmanship. Zero steel factory pipes, zero chemical shortcuts.
          </p>

          {/* Stepper Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            {MOUNTAIN_RITUALS.map((item) => (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                  activeStep === item.step
                    ? 'bg-forest text-white shadow-md'
                    : 'bg-white text-forest border border-mist hover:bg-mist'
                }`}
              >
                <span>{item.icon}</span>
                <span>Step {item.step}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-mist grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow border border-mist">
            <img
              src={currentStep.image}
              alt={currentStep.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-honey uppercase tracking-wider">
              <span>{currentStep.icon}</span>
              <span>Stage {currentStep.step} of 4</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              {currentStep.title}
            </h3>
            <h4 className="text-xs font-bold text-amber uppercase tracking-wider">
              {currentStep.subtitle}
            </h4>

            <p className="text-xs sm:text-sm text-stone leading-relaxed">
              {currentStep.description}
            </p>

            <div className="p-4 bg-forest/5 rounded-2xl border border-forest/10 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-honey shrink-0 mt-0.5" />
              <div className="text-xs text-forest">
                <span className="font-bold block">Pahadi Folk Secret:</span>
                <span className="text-stone">{currentStep.traditionNote}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 4))}
                className="text-xs text-stone hover:text-forest font-semibold"
              >
                ← Previous Stage
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < 4 ? prev + 1 : 1))}
                className="px-4 py-2 bg-forest text-white text-xs font-semibold rounded-xl hover:bg-forest2 transition flex items-center gap-1.5"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
