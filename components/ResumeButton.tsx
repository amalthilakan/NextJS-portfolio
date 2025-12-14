'use client';

import { useState } from 'react';
import { HiDownload, HiCheck } from 'react-icons/hi';
import { CgSpinner } from 'react-icons/cg';
import { cn } from '@/lib/utils';

export default function ResumeButton() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleDownload = () => {
        setStatus('loading');

        setTimeout(() => {
            setStatus('success');

            // Trigger download
            const link = document.createElement('a');
            link.href = '/AmalResumeATS.pdf';
            link.download = 'AmalResumeATS.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Revert to idle after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }, 1000);
    };

    return (
        <button
            onClick={handleDownload}
            onMouseLeave={() => setStatus('idle')}
            disabled={status === 'loading'}
            className={cn(
                "px-8 py-3 font-bold rounded-full border border-gray-300 dark:border-gray-700 transition-all flex items-center justify-center gap-2 min-w-[200px]",
                status === 'idle' && "hover:bg-gray-100 dark:hover:bg-gray-800",
                status === 'success' && "bg-green-500 border-green-500 text-white hover:bg-green-600"
            )}
        >
            {status === 'idle' && (
                <>
                    Download Resume <HiDownload />
                </>
            )}
            {status === 'loading' && (
                <>
                    Downloading <CgSpinner className="animate-spin" />
                </>
            )}
            {status === 'success' && (
                <>
                    Downloaded <HiCheck />
                </>
            )}
        </button>
    );
}
