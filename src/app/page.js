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
          <h1 className="font-serif text-[16vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none mb-12">
            DIS-
            <br />
            SIMI-
            <br />
            LATION
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl max-w-3xl leading-snug">
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

        {/* Categorized Interactive Examples Section */}
        <section className="mb-40 space-y-32">
          
          <CategorySection 
            title={<>1. Liquid Dissimilation (<em className="font-serif">l</em> and <em className="font-serif">r</em>)</>}
            description={<>This is the most frequent type of dissimilation in English, often inherited from Latin. English has a phonetic constraint that makes it difficult to process two <em className="font-serif font-bold">l</em> sounds or two <em className="font-serif font-bold">r</em> sounds in close proximity. The Suffix Rule: The Latin suffix <em className="font-serif">-alis</em> (pertaining to) usually remains <em className="font-serif">-al</em> in English. However, if the root word already contains an <em className="font-serif">l</em>, the suffix dissimilates to <em className="font-serif font-bold">-ar</em>.</>}
          >
            <InteractiveExample
              original="Singul-al"
              english="Singular"
              targetRange={[6, 9]} 
              originalTarget="-al"
              newTarget="-ar"
              explanation={<>To avoid the repetitive "<em className="font-serif">singul-al</em>", the suffix dissimilates to <em className="font-serif font-bold">-ar</em>.</>}
            />
            <InteractiveExample
              original="Modul-al"
              english="Modular"
              targetRange={[5, 8]}
              originalTarget="-al"
              newTarget="-ar"
              explanation={<>To avoid "<em className="font-serif">modul-al</em>", the suffix dissimilates to <em className="font-serif font-bold">-ar</em>.</>}
            />
            <InteractiveExample
              original="Lun-al"
              english="Lunar"
              targetRange={[3, 6]}
              originalTarget="-al"
              newTarget="-ar"
              explanation={<>From Luna (Moon). To avoid "<em className="font-serif">lun-al</em>", the suffix dissimilates to <em className="font-serif font-bold">-ar</em>.</>}
            />
          </CategorySection>

          <CategorySection 
            title="2. Rhotic Dissimilation (The 'R-Drop')"
            description={<>In standard and rapid English speech, if two <em className="font-serif font-bold">r</em> sounds (rhotic consonants) appear in consecutive syllables, the first one is frequently deleted or changed to a glide. This simplifies the 'tongue-bunching' required.</>}
          >
            <InteractiveExample
              original="February"
              english="Feb-yu-ary"
              targetRange={[3, 4]} 
              originalTarget="r"
              newTarget="∅"
              explanation={<>The first <em className="font-serif">r</em> is often dropped (/ˈfɛbjʊɛri/) because the brain anticipates the second <em className="font-serif">r</em> at the end.</>}
            />
            <InteractiveExample
              original="Berserk"
              english="Be-zerk"
              targetRange={[2, 3]} 
              originalTarget="r"
              newTarget="∅"
              explanation={<>Commonly pronounced as "<em className="font-serif">be-zerk</em>" rather than "<em className="font-serif">ber-zerk</em>".</>}
            />
            <InteractiveExample
              original="Governor"
              english="Guv-en-er"
              targetRange={[4, 5]} 
              originalTarget="r"
              newTarget="∅"
              explanation={<>Often pronounced "<em className="font-serif">guv-en-er</em>", dropping the internal <em className="font-serif">r</em> to avoid repetitive rhoticity.</>}
            />
          </CategorySection>

          <CategorySection 
            title="3. Fricative Dissimilation"
            description={<>Fricatives (sounds made by forcing air, like <em className="font-serif">f, s, th, x</em>) are acoustically 'noisy'. When two appear together, one may switch to a 'stop' (completely blocked airflow, like <em className="font-serif">t, k</em>) to create clearer contrast.</>}
          >
            <InteractiveExample
              original="Fifth"
              english="Fift"
              targetRange={[3, 5]} 
              originalTarget="th"
              newTarget="t"
              explanation={<>In many modern dialects, the second fricative (<em className="font-serif">th</em>) is dissimilated to a <em className="font-serif">t</em> (/fɪft/).</>}
            />
            <InteractiveExample
              original="Sixth"
              english="Sikst"
              targetRange={[3, 5]} 
              originalTarget="th"
              newTarget="t"
              explanation={<>Similar to 'fifth', the ending fricative is frequently changed to a <em className="font-serif font-bold">t</em> to replace a 'hiss' with a 'click'.</>}
            />
          </CategorySection>

          <CategorySection 
            title="4. Dissimilation in Loanwords"
            description={<>When English adopts words from French or Latin, it often 'fixes' repetitive sounds that existed in the source language to make them more distinct for English speakers.</>}
          >
            <InteractiveExample
              original="Purpure"
              english="Purple"
              targetRange={[5, 6]} 
              originalTarget="r"
              newTarget="l"
              explanation={<>The Old French '<em className="font-serif">purpre</em>'. English speakers found the double <em className="font-serif">r</em> redundant. The second <em className="font-serif">r</em> dissimilated into an <em className="font-serif font-bold">l</em>.</>}
            />
            <InteractiveExample
              original="Turtur"
              english="Turtle"
              targetRange={[5, 6]} 
              originalTarget="r"
              newTarget="l"
              explanation={<>Derived from Latin '<em className="font-serif">turtur</em>'. The repetition was broken by changing the final <em className="font-serif">r</em> to an <em className="font-serif font-bold">l</em>.</>}
            />
          </CategorySection>

        </section>

        {/* Summary Wrap-up */}
        <section className="border-t border-foreground pt-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Language is always optimizing.</h2>
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Dissimilation shows us that language is primarily a physical act. When our mouths stumble over repetitive sounds, the language simply adapts by making sounds less alike.
          </p>
        </section>
      </main>
    </div>
  );
}

function CategorySection({ title, description, children }) {
  return (
    <div className="border-t-2 border-foreground/20 pt-16">
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">{title}</h2>
      <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-12">
        {description}
      </p>
      <div className="flex flex-col gap-12">
        {children}
      </div>
    </div>
  );
}

function InteractiveExample({ original, english, targetRange, originalTarget, newTarget, explanation }) {
  const [morphed, setMorphed] = useState(false);

  // Split string based on target range [start, end)
  const pre = original.slice(0, targetRange[0]);
  const post = original.slice(targetRange[1]);

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-between p-8 md:p-12 border border-foreground/20 rounded-xl hover:border-foreground transition-colors duration-500 bg-white dark:bg-black group">
      {/* Interactive Word Area */}
      <div 
        className="flex-1 flex justify-center items-center cursor-pointer min-h-[160px] overflow-x-hidden min-w-0"
        onClick={() => setMorphed(!morphed)}
      >
        <div className="font-serif text-[10vw] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-center select-none flex items-baseline">
          <span className="transition-all duration-700">{pre}</span>
          <span 
            className={`inline-block transition-all duration-1000 ease-in-out mx-1 ${
              morphed 
                ? newTarget === "∅" ? "text-foreground/30 scale-75" : "text-5xl sm:text-6xl md:text-8xl scale-110 -translate-y-1 lg:-translate-y-2"
                : "text-foreground group-hover:scale-110 group-hover:text-foreground/80"
            }`}
          >
            {morphed ? newTarget : originalTarget}
          </span>
          <span className="transition-all duration-700">{post}</span>
        </div>
      </div>

      {/* Explanation Area */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-serif font-bold transition-all duration-500">
          Result: {morphed ? <span className="border-b-2 border-foreground">{english}</span> : english}
        </h3>
        <p className="text-base md:text-lg leading-relaxed font-light text-foreground/80">
          {explanation}
        </p>
        <div className="text-xs font-sans font-bold uppercase tracking-widest mt-4 text-foreground/40 transition-colors group-hover:text-foreground/80">
          {morphed ? "Click to revert" : "Click the word to see effect"}
        </div>
      </div>
    </div>
  );
}
