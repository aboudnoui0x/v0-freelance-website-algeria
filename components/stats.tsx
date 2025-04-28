import { Users, Briefcase, Award, Clock } from "lucide-react"

export function Stats() {
  const stats = [
    {
      id: 1,
      value: "10,000+",
      label: "Freelancers",
      icon: <Users className="h-6 w-6 text-green-600" />,
    },
    {
      id: 2,
      value: "5,000+",
      label: "Projects Completed",
      icon: <Briefcase className="h-6 w-6 text-green-600" />,
    },
    {
      id: 3,
      value: "500+",
      label: "Satisfied Clients",
      icon: <Award className="h-6 w-6 text-green-600" />,
    },
    {
      id: 4,
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="h-6 w-6 text-green-600" />,
    },
  ]

  return (
    <section className="py-8 border-y">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className="mb-2">{stat.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
