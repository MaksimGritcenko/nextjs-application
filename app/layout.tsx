import '@/app/ui/global.css';
import { inter } from './ui/fonts';


// antialised - сглаживает шрифты

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialised`}>{children}</body>
        </html>
    );
}
