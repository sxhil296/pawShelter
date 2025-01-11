import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from "./ui/input";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    mobileNumber: z.number().min(10, 'Number must be at 10 digits'),
    amount: z.number().min(2, 'Message must be at least 2 digits'),
  })


export default function PaymentModal({ isOpen, onClose }:PaymentModalProps) {
  if (!isOpen) return null;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobileNumber: 91,
      amount: 0,
    },
  })

 

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-muted p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Make a Donation</h2>
           <Button onClick={onClose} variant="ghost" className="p-2">
            <X/>
           </Button>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
           
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             <div className="flex justify-between items-center">
             <Button type="submit">Donate</Button>
              <Button onClick={onClose} variant={"ghost"} >Cancel</Button>
             </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

