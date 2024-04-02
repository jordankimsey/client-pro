import React from 'react';

import { File, ListFilter, PlusCircle } from 'lucide-react';

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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Client, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

async function getData(): Promise<Client[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      name: 'John Doe',
      status: 'active',
      email: 'm@example.com',
      company: 'Land Clearing Experts',
      phoneNumber: '770-432-1965',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    {
      id: '728dfadfadf',
      name: 'Steve Doe',
      status: 'active',
      email: 'steve@example.com',
      company: 'Roofing Experts',
      phoneNumber: '433-547-8637',
    },
    // ...
  ];
}

const Clients = async () => {
  const data = await getData();
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
      <div className='flex items-center'>
        <h1 className='text-lg font-semibold md:text-2xl'>Clients</h1>
      </div>
      <div className='flex items-center'>
        <div className='ml-auto flex items-center gap-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm' className='h-8 gap-1'>
                <ListFilter className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size='sm' variant='outline' className='h-8 gap-1'>
            <File className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              Export
            </span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm' className='h-8 gap-1'>
                <PlusCircle className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                  Add Client
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Add Client</DialogTitle>
                <DialogDescription>
                  Add client details here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input id='name' className='col-span-3' type='text' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input id='email' className='col-span-3' type='email' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='phoneNumber' className='text-right'>
                    Phone Number
                  </Label>
                  <Input id='phoneNumber' className='col-span-3' type='tel' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='company' className='text-right'>
                    Company
                  </Label>
                  <Input id='company' type='text' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='status' className='text-right'>
                    Status
                  </Label>
                  <Input id='status' type='text' className='col-span-3' />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Card>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
      {data.length === 0 && (
        <div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
          <div className='flex flex-col items-center gap-1 text-center'>
            <h3 className='text-2xl font-bold tracking-tight'>
              You have no clients
            </h3>
            <p className='text-sm text-muted-foreground'>
              Create your client list
            </p>
            <Button className='mt-4'>Add Client</Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Clients;
