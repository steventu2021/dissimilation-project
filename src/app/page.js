"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background pb-32">
      {/* Navigation / Header */}
      <header className="p-8 md:p-12 w-full flex justify-between items-center border-b border-foreground/10">
        <h2 className="font-serif font-bold text-xl tracking-tighter">Linguistics 101</h2>
        <span className="text-sm uppercase tracking-widest font-medium">Topic 04</span>
      </header>

      <main className="max-w-5xl mx-auto px-8 md:px-12 mt-24">
        {/* Hero Section */}
        <section className="mb-40">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none mb-12">
            DIS-
            <br />
            SIMI-
            <br />
            LATION
          </h1>
          <p className="font-serif text-2xl md:text-3xl max-w-3xl leading-snug">
            The process by which two similar or identical sounds in a word become <span className="font-bold border-b-4 border-foreground pb-1">less alike</span>.
          </p>
        </section>

        {/* The "Why" Section */}
        <section className="mb-40 border-t-2 border-foreground pt-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Why does this happen?</h2>
            </div>
            <div className="flex flex-col gap-8 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Languages are lazy. Or rather, speakers are striving for efficiency. When a word contains two identical or very similar sounds close together, it can be physically awkward to articulate them in rapid succession (a "tongue twister" effect).
              </p>
              <p>
                To make pronunciation easier and to make the acoustic signal clearer to the listener, one of the sounds will randomly mutate or be deleted entirely. The sounds <strong>dissimilate</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Examples Section */}
        <section className="mb-40">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center">See it in action</h2>
          <div className="flex flex-col gap-24">
            <InteractiveExample
              latin="purpur"
              shiftIndex={2}
              originalChar="r"
              newChar="l"
              english="purple"
              explanation="The Latin word for the color was 'purpur'. However, pronouncing two 'r' sounds so close together is difficult. Over time, the second 'r' dissimilated into an 'l'."
            />
            
            <InteractiveExample
              latin="peregrinus"
              shiftIndex={2}
              originalChar="r"
              newChar="l"
              english="pilgrim"
              explanation="Meaning 'foreigner' or 'traveler' in Latin. The sequence of 'r...r' was awkward. The first 'r' shifted into an 'l', eventually giving us 'pilgrim' in English."
            />

            <InteractiveExample
              latin="surprise"
              shiftIndex={2}
              originalChar="r"
              newChar="∅"
              english="suprise"
              explanation="A modern example! In rapid speech, the first 'r' in 'surprise' is frequently dropped entirely. This is a form of dissimilation called deletion."
            />
          </div>
        </section>

        {/* Summary Wrap-up */}
        <section className="border-t border-foreground pt-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Language is always optimizing.</h2>
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Dissimilation shows us that language is primarily a physical act. When our mouths stumble over repetitive sounds, the language simply adapts.
          </p>
        </section>
      </main>
    </div>
  );
}

function InteractiveExample({ latin, shiftIndex, originalChar, newChar, english, explanation }) {
  const [morphed, setMorphed] = useState(false);

  // Reconstruct the visual word
  const pre = latin.slice(0, shiftIndex);
  const target = latin[shiftIndex];
  const post = latin.slice(shiftIndex + 1);

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-between p-8 md:p-16 border border-foreground/20 rounded-xl hover:border-foreground transition-colors duration-500 bg-white dark:bg-black">
      {/* Interactive Word Area */}
      <div 
        className="flex-1 flex justify-center items-center cursor-pointer group"
        onClick={() => setMorphed(!morphed)}
      >
        <div className="font-serif text-6xl md:text-7xl font-bold tracking-widest text-center select-none">
          <span className="transition-all duration-700">{pre}</span>
          <span 
            className={`inline-block transition-all duration-1000 ease-in-out mx-1 ${
              morphed 
                ? "text-8xl md:text-9xl scale-125 -translate-y-4" 
                : "text-foreground group-hover:scale-110"
            }`}
          >
            {morphed ? newChar : target}
          </span>
          <span className="transition-all duration-700">{post}</span>
          
          <div className="text-lg font-sans font-medium uppercase tracking-widest mt-8 text-foreground/50 transition-colors group-hover:text-foreground">
            {morphed ? "Click to revert" : "Click the word"}
          </div>
        </div>
      </div>

      {/* Explanation Area */}
      <div className="flex-1 space-y-4">
        <h3 className="text-3xl font-serif font-bold">
          {morphed ? "English: " + english : "Latin: " + latin}
        </h3>
        <p className="text-lg leading-relaxed font-light">
          {explanation}
        </p>
      </div>
    </div>
  );
}
