'use client';

import dynamic from 'next/dynamic';

const LocationMap = dynamic(
  () => import('@/components/sections/contact/Map'),
  { ssr: false }
);

export default function MapWrapper() {
  return (
    <div className="aspect-[21/9] relative group">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:opacity-75 transition-opacity pointer-events-none" />
      <LocationMap />
    </div>
  );
}
