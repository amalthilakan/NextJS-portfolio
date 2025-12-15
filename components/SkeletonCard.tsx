// Skeleton loading components for better perceived performance

export function ProjectSkeleton() {
    return (
        <div className="bg-white/5 dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 animate-pulse">
            <div className="h-64 bg-gray-300/20 dark:bg-gray-300/10" />
            <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-300/20 dark:bg-gray-300/10 rounded w-3/4" />
                <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-full" />
                <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-5/6" />
                <div className="flex gap-2 mt-4">
                    <div className="h-6 w-16 bg-gray-300/20 dark:bg-gray-300/10 rounded-full" />
                    <div className="h-6 w-16 bg-gray-300/20 dark:bg-gray-300/10 rounded-full" />
                    <div className="h-6 w-16 bg-gray-300/20 dark:bg-gray-300/10 rounded-full" />
                </div>
            </div>
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 animate-pulse">
            <div className="space-y-4">
                <div className="h-8 bg-gray-300/20 dark:bg-gray-300/10 rounded w-1/2" />
                <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-full" />
                <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-4/5" />
                <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-3/4" />
            </div>
        </div>
    );
}

export function ListSkeleton() {
    return (
        <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 animate-pulse">
                    <div className="h-12 w-12 bg-gray-300/20 dark:bg-gray-300/10 rounded-full shrink-0" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-3/4" />
                        <div className="h-3 bg-gray-300/20 dark:bg-gray-300/10 rounded w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export function ExperienceSkeleton() {
    return (
        <div className="space-y-6 animate-pulse">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                    <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-gray-300/20 dark:bg-gray-300/10 rounded-lg shrink-0" />
                        <div className="flex-1 space-y-3">
                            <div className="h-5 bg-gray-300/20 dark:bg-gray-300/10 rounded w-2/3" />
                            <div className="h-4 bg-gray-300/20 dark:bg-gray-300/10 rounded w-1/2" />
                            <div className="h-3 bg-gray-300/20 dark:bg-gray-300/10 rounded w-1/3" />
                            <div className="space-y-2 mt-4">
                                <div className="h-3 bg-gray-300/20 dark:bg-gray-300/10 rounded w-full" />
                                <div className="h-3 bg-gray-300/20 dark:bg-gray-300/10 rounded w-5/6" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function SkillCardSkeleton() {
    return (
        <div className="flex flex-wrap gap-4 relative z-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                    key={i}
                    className="animate-pulse"
                >
                    <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-300/20 dark:bg-gray-300/10 border border-gray-200 dark:border-white/10">
                        <div className="h-8 w-8 bg-gray-300/30 dark:bg-gray-300/15 rounded-full mb-2" />
                        <div className="h-3 w-16 bg-gray-300/30 dark:bg-gray-300/15 rounded" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <ProjectSkeleton key={i} />
            ))}
        </div>
    );
}
