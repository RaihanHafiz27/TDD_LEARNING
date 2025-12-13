import {
  CartProject,
  type CardType,
} from "../components/fragments/card/CardProject";

const datas: CardType[] = [
  {
    id: 1,
    title: "🔒 Password Validator",
    level: "beginner",
    desc: "Logic String & Regex Exercise. Ensuring passwords meet security criteria.",
    link: "/password",
  },
  {
    id: 2,
    title: "🛒 Shopping Cart",
    level: "intermediate",
    desc: "Latihan Logic Array & Math. Menghitung total belanja, pajak, dan diskon.",
    link: "/shopping",
  },
  {
    id: 3,
    title: "🛒 Shopping",
    level: "intermediate",
    desc: "Latihan Logic Array & Math. Menghitung total belanja, pajak, dan diskon.",
    link: "#",
  },
];

const HomePage = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-100">
          Frontend TDD Lab 🧪
        </h1>
        <p className="text-lg text-gray-400">
          A series of frontend case studies that I developed as part of my
          learning <br />
          journey in applying{" "}
          <span className="text-slate-200 font-semibold">
            Test-Driven Development
          </span>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {datas.map((item) => (
          <CartProject
            key={item.id}
            id={item.id}
            title={item.title}
            level={item.level}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
