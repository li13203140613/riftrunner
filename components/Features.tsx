export default function Features() {
  const features = [
    {
      icon: "🎨",
      title: "Free AI-Powered Generation",
      description:
        "RiftRunner lets you create animations for free using advanced AI. It works at the highest quality without any cost.",
    },
    {
      icon: "🌐",
      title: "No Software Installation Required",
      description:
        "Everything happens in your browser with RiftRunner. No app or account needed. We avoid installers and logins for a fast experience.",
    },
    {
      icon: "📱",
      title: "Desktop and Mobile Ready",
      description:
        "We made RiftRunner for laptops, tablets, and phones. It looks good on any screen and works well on mobile data or Wi-Fi.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          What Is RiftRunner and How It Works
        </h2>
        <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          RiftRunner is an online AI-powered animation generator that transforms your text
          descriptions into beautiful animated graphics. Just type your idea, and we'll handle it.
          We focus on speed and quality so you can keep working.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
