import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Bolt, CircleUser, Home, Menu, Search, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavLink from '@/components/NavLink';
import { ThemeProvider } from '@/app/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Pro',
  description: 'Next Generation Client Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className=''>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
            <div className='hidden border-r bg-muted/40 md:block'>
              <div className='flex h-full max-h-screen flex-col gap-2'>
                <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
                  <Link
                    href='/'
                    className='flex items-center gap-2 font-semibold'
                  >
                    <Bolt className='h-6 w-6' />
                    <span className=''>Client Pro</span>
                  </Link>
                </div>
                <div className='flex-1'>
                  <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                    <NavLink
                      text='Dashboard'
                      href='/'
                      icon={<Home className='h-4 w-4' />}
                    />
                    <NavLink
                      text='Clients'
                      href='/clients'
                      icon={<Users className='h-4 w-4' />}
                    />
                  </nav>
                </div>
                <div className='mt-auto p-4'>
                  <Card>
                    <CardHeader className='p-2 pt-0 md:p-4'>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
                      <Button size='sm' className='w-full'>
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant='outline'
                      size='icon'
                      className='shrink-0 md:hidden'
                    >
                      <Menu className='h-5 w-5' />
                      <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side='left' className='flex flex-col'>
                    <nav className='grid gap-2 text-lg font-medium'>
                      <Link
                        href='/'
                        className='flex items-center gap-2 text-lg font-semibold'
                      >
                        <Bolt />
                        <span>Client Pro</span>
                      </Link>
                      <Link
                        href='/'
                        className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                      >
                        <Home className='h-5 w-5' />
                        Dashboard
                      </Link>

                      <Link
                        href='/clients'
                        className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                      >
                        <Users className='h-5 w-5' />
                        Clients
                      </Link>
                    </nav>
                    <div className='mt-auto'>
                      <Card>
                        <CardHeader>
                          <CardTitle>Upgrade to Pro</CardTitle>
                          <CardDescription>
                            Unlock all features and get unlimited access to our
                            support team.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button size='sm' className='w-full'>
                            Upgrade
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </SheetContent>
                </Sheet>
                <div className='w-full flex-1'></div>
                <ModeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='secondary'
                      size='icon'
                      className='rounded-full'
                    >
                      <CircleUser className='h-5 w-5' />
                      <span className='sr-only'>Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </header>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
