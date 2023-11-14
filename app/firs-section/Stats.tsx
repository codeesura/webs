import React from "react";

const stats = [
  { label: "Total Transactions", value: "100+" },
  { label: "Total Volume", value: "$1k+" },
  { label: "Active Users", value: "50+" },
  { label: "Networks", value: "6" }
];

export default function Stats() {
  return (
    <section className="py-12 bg-transparent text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex justify-center">
              <div className="bg-transparent rounded-lg px-6 py-4 text-center">
                <span className="block text-2xl font-bold text-slate-200">
                  {stat.value}
                </span>
                <span className="block text-base text-slate-200">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
