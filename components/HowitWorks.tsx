import Image from "next/image";
import Picture1 from "@/public/Picture1.png";
import Picture2 from "@/public/Picture2.png";
import Picture3 from "@/public/Picture3.png";
//import Picture4 from "@/public/Picture4.png";
//import Picture5 from "@/public/Picture5.png";
import Picture6 from "@/public/Picture6.png"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Download & Sign Up",
      description: "Download Medfinder from the app store and sign up",
      image: Picture1,
    },
    {
      number: 2,
      title: "Search & Order",
      description:
        "Search Medications by Name, compare prices, select the most affordable option at nearby pharmacies via GPS location. Place order, choose delivery or pickup.",
      image: Picture2,
    },
    {
      number: 3,
      title: "Track Your Order",
      description: "Track order status.",
      image: Picture3,
    },
    {
      number: 4,
      title: "Receive Delivery",
      description: "Medication Order is delivered to your doorstep in an hour or less.",
      image: Picture6,
    },
  ]

  return (
    <section className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">HOW IT WORKS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                  {step.number < 4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                <div className="mb-4 h-48 relative">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`Step ${step.number}: ${step.title}`}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
