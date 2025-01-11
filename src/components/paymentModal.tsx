import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./ui/input";
import { useState } from "react";
import Spinner from "./spinner";
import axios from "axios";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobileNumber: z.string().min(10, "Number must be at 10 digits"),

  amount: z.string().min(2, "Amount must be at least 2 digits"),
});

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobileNumber: "",
      amount: "",
    },
  });

  if (!isOpen) return null;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true); 
    const data = {
      name: values.name,
      mobileNumber: values.mobileNumber,
      amount: values.amount,
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now(),
    };
    console.log("Data Prepared for Submission:", data);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/order`,
        data
      );
      console.log("Response Received:", response.data);
      
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    } finally {
      setLoading(false);
      onClose();
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex justify-center items-center z-50 px-6">
        <div className="bg-muted p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Make a Donation</h2>
            <Button onClick={onClose} variant="ghost" className="p-2">
              <X />
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
                <Button type="submit" disabled={loading}>
                  {loading ? <Spinner /> : "Donate"}
                </Button>
                <Button onClick={onClose} variant={"ghost"} disabled={loading}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
