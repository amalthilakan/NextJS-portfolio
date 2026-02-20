'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {/* @ts-expect-error React 18 type conflict with react-lenis */}
            {children}
        </ReactLenis>
    );
}
