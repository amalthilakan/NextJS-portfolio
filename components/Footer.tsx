export default function Footer() {
    return (
        <footer className="bg-white/5 dark:bg-black/5 backdrop-blur-sm border-t border-white/10 dark:border-white/5 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Amal Thilakan. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Built with Next.js, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
}
