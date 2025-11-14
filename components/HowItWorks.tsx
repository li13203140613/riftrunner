export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Describe Your Animation",
      description:
        "Type what you want to create in the RiftRunner text field. Be clear and detailed for best results.",
    },
    {
      number: "2",
      title: "Click Generate",
      description:
        "Press the generate button and let RiftRunner AI create your animation in seconds.",
    },
    {
      number: "3",
      title: "Preview Animation",
      description:
        "Watch your animation play in real-time. RiftRunner shows you the result instantly in your browser.",
    },
    {
      number: "4",
      title: "Download Video",
      description:
        "Click download to save your animation. Use it in websites, apps, or presentations right away.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Quick Start: Generate Animation with RiftRunner
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 mt-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
