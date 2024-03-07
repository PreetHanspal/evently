import Footer from "@/components/ui/shared/Footer";


import Header from "@/components/ui/shared/Header";

// ... rest of your code

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
        </div>
    );
  }