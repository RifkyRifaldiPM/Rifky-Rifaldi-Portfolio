import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function PortfolioHome() {
  return (
    <div className="p-6 md:p-10 space-y-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">👋 Hi, I'm Rifky</h1>
        <p className="text-lg text-gray-600 mt-2">
          Project Manager & Digital Marketing Specialist based in West Java
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Featured Projects</h2>

        <Card className="rounded-2xl shadow-md mb-6">
          <CardContent className="p-6 space-y-2">
            <h3 className="text-xl font-semibold">📢 Chalista Residence 2 – Digital Campaign</h3>
            <p><strong>Role:</strong> Digital Marketing Executive</p>
            <p><strong>Goal:</strong> Increase social media reach and conversion</p>
            <p><strong>Actions:</strong> SEO/SEM, targeted campaigns, A/B testing</p>
            <p><strong>Results:</strong> IG Reach: 20K → 60K, +15% conversion, +10% ROI</p>
            <Button variant="outline">View Campaign Slide</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md mb-6">
          <CardContent className="p-6 space-y-2">
            <h3 className="text-xl font-semibold">🏗️ Chalista Residence – Construction PM</h3>
            <p><strong>Role:</strong> Assistant Project Manager</p>
            <p><strong>Goal:</strong> Deliver 27 houses on-time & on-budget</p>
            <p><strong>Actions:</strong> Budgeting, vendor selection, timeline control</p>
            <p><strong>Results:</strong> 100% on-time, -10% cost, -5% downtime</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🎓 Education & Certifications</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>MM in Digital Business – BINUS (2024–2025), GPA: 3.6</li>
          <li>Bachelor's in Economics – Gunadarma (2016–2020), GPA: 3.5</li>
          <li>CAPM (Expected July 2025)</li>
          <li>Digital Marketing Bootcamp – MySkill (2022)</li>
          <li>TOEFL LIA – 514 | IELTS Speaking – C1+</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📫 Contact</h2>
        <p>Email: rifkyrifaldipm@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/rifky-rifaldi" className="text-blue-600 underline">linkedin.com/in/rifky-rifaldi</a></p>
      </section>

      <div className="text-center text-gray-400 pt-10">
        <p>© 2025 Mochamad Rifky Rifaldi. Built with React & Tailwind.</p>
      </div>
    </div>
  );
}
