import React from 'react';

const TextSizeExample = () => {
  return (
    <div className="p-4">
      <p className="text-xs">This is extra small text (12px).</p>
      <p className="text-sm">This is small text (14px).</p>
      <p className="text-base">This is base text (16px).</p>
      <p className="text-lg">This is large text (18px).</p>
      <p className="text-xl">This is extra-large text (20px).</p>
      <p className="text-2xl">This is 2x extra-large text (24px).</p>
      <p className="text-3xl">This is 3x extra-large text (30px).</p>
      <p className="text-4xl">This is 4x extra-large text (36px).</p>
      <p className="text-5xl">This is 5x extra-large text (48px).</p>
      <p className="text-6xl">This is 6x extra-large text (60px).</p>
    </div>
  );
};

export default TextSizeExample;
