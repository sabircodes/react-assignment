export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="text-4xl text-accent-green mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-base-dark">{title}</h3>
      <p className="text-base-gray">{description}</p>
    </div>
  );
}