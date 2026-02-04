import type {Metadata} from "next";
import './normalize.scss'

import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import {Header} from "@/Components/UI/Header/Header";
import {Footer} from "@/Components/UI/Footer/Footer";
import {ButtonScrollTopWrapper} from "@/Components/UI/ButtonScrollTopWrapper/ButtonScrollTopWrapper";
import {Wrapper} from "@/Components/UI/Wrapper/Wrapper";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Главная | Bestcon Life",
    description: "",
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <Script
                src="https://api-maps.yandex.ru/2.1/?apikey=fe429780-8dbf-4969-80b8-51fd8cfebe28&lang=ru_RU"
                strategy="beforeInteractive" // Загружается до интерактивности страницы
            />
            <Script
                src="https://pos.gosuslugi.ru/bin/script.min.js"
                strategy="afterInteractive" // Загружается после интерактивности страницы
            />
        </head>

        <body>
            <Wrapper>
                <Header/>
                <main className='main'>
                    <ButtonScrollTopWrapper/>
                    {children}
                </main>
                <Footer/>
            </Wrapper>
        </body>

        </html>
    );
}
