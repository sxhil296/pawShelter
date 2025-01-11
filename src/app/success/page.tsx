import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 gap-4">
      <div className="relative">
      <Image src={'/images/success.jpg'} width={400} height={400} alt="High Five" className="rounded-md w-full h-auto object-cover"/>
      </div>
      <h1 className="text-3xl font-bold text-center text-green-500">Thank you for your donation!</h1>
      <p className="text-center text-lg">We appreciate your support and will get back to you soon.</p>
      <Link href={'/'} className="border bg-primary px-4 py-2 rounded-md text-center">Go Home</Link>
    </div>
  )
}