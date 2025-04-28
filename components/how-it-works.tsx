import { CheckCircle, Search, FileCheck, CreditCard } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Sign up as a freelancer or client in just a few minutes.",
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
    },
    {
      id: 2,
      title: "Find the Perfect Match",
      description: "Browse profiles or post a job to find the right talent.",
      icon: <Search className="h-10 w-10 text-green-600" />,
    },
    {
      id: 3,
      title: "Collaborate Easily",
      description: "Work together through our secure platform.",
      icon: <FileCheck className="h-10 w-10 text-green-600" />,
    },
    {
      id: 4,
      title: "Secure Payments",
      description: "Pay safely using our secure payment methods.",
      icon: <CreditCard className="h-10 w-10 text-green-600" />,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our simple process makes it easy to find talent or work in Algeria
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-green-50 p-3">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
