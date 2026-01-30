import {
  CartProject,
  type CardType,
} from "../components/fragments/card/CardProject";

const datas: CardType[] = [
  {
    id: 1,
    title: "🔒 Password Validator",
    level: "beginner",
    desc: "Logic String & Regex. Ensures that passwords meet criteria (minimum length, numbers, capital letters).",
    link: "/password",
  },
  {
    id: 2,
    title: "🛒 Shopping Cart Logic",
    level: "intermediate",
    desc: "Logic Array & Math. Calculate subtotals, conditional discounts, and currency formatting.",
    link: "/cart",
  },
  {
    id: 3,
    title: "👥 Employee Filter",
    level: "intermediate",
    desc: "Logic Search. Filter an array of objects based on the keyword name and active/inactive status.",
    link: "/employees",
  },

  {
    id: 4,
    title: "📄 Pagination Core",
    level: "intermediate",
    desc: "Logic Math. Input: totalData & perPage. Output: totalPage, startIndex, endIndex, hasNextPage.",
    link: "/pagination",
  },
  {
    id: 5,
    title: "⏳ Relative Time",
    level: "intermediate",
    desc: "Logic Date. Calculates the time difference between now and the timestamp: '5 minutes ago', 'Yesterday'.",
    link: "/logic-time",
  },
  /*
  {
    id: 5,
    title: "🔗 Slug Generator",
    level: "beginner",
    desc: "Logic Regex. Mengubah 'Halo Dunia & Apa Kabar?' menjadi 'halo-dunia-apa-kabar'. Handle simbol aneh.",
    link: "/logic-slug",
  },
  {
    id: 6,
    title: "💳 Credit Card Masking",
    level: "beginner",
    desc: "Logic String. Mengubah '4500 1234 5678 9010' menjadi '**** **** **** 9010'. Handle spasi/dash.",
    link: "/logic-masking",
  },
  {
    id: 7,
    title: "🎨 Hex to RGB Converter",
    level: "intermediate",
    desc: "Logic Math/Base16. Mengubah kode warna '#FF0000' menjadi object {r: 255, g: 0, b: 0}.",
    link: "/logic-color",
  },
 
  {
    id: 9,
    title: "🛡️ RBAC Permission",
    level: "advanced",
    desc: "Logic Security. Fungsi `canAccess(role, resource)`. Admin tembus semua, User terbatas.",
    link: "/logic-rbac",
  },
  {
    id: 10,
    title: "🔄 Deep Object Compare",
    level: "advanced",
    desc: "Logic Recursion. Membandingkan apakah dua object {a: {b: 1}} dan {a: {b: 1}} isinya sama persis.",
    link: "/logic-deep-compare",
  },

  // =================================================================
  // 🖱️ PART 2: UI & INTERACTION (Integration Testing - React Testing Library)
  // Fokus: Render, Click, Type, Show/Hide, Styles change.
  // =================================================================

  {
    id: 11,
    title: "🔘 Counter & Toggle",
    level: "beginner",
    desc: "UI Basics. Test klik tombol tambah/kurang angka. Test tombol Show/Hide text.",
    link: "/ui-counter",
  },
  {
    id: 12,
    title: "📂 Accordion / Collapse",
    level: "intermediate",
    desc: "UI Visibility. Klik Header A -> Konten A muncul. Klik Header B -> Konten A tertutup, B muncul.",
    link: "/ui-accordion",
  },
  {
    id: 13,
    title: "📑 Tabs Component",
    level: "intermediate",
    desc: "UI Navigation. Memastikan konten yang dirender sesuai dengan Tab yang sedang 'Active'.",
    link: "/ui-tabs",
  },
  {
    id: 14,
    title: "🍞 Toast Notification",
    level: "advanced",
    desc: "UI Async (Timer). Muncul saat sukses, lalu hilang otomatis setelah 3 detik (Test setTimeout).",
    link: "/ui-toast",
  },
  {
    id: 15,
    title: "🪟 Modal / Dialog",
    level: "intermediate",
    desc: "UI Overlay. Test buka modal, test tutup via tombol 'X', test tutup via klik background (backdrop).",
    link: "/ui-modal",
  },
  {
    id: 16,
    title: "📝 Form Validation UI",
    level: "intermediate",
    desc: "UI Forms. Tombol submit disabled saat kosong. Muncul pesan error merah di bawah input saat salah.",
    link: "/ui-form",
  },
  {
    id: 17,
    title: "🌑 Dark Mode Switcher",
    level: "beginner",
    desc: "UI Class Manipulation. Klik toggle -> Body berubah class jadi 'dark'. LocalStorage dicek.",
    link: "/ui-theme",
  },
  {
    id: 18,
    title: "🔍 Debounced Search UI",
    level: "advanced",
    desc: "UI Async (User Event). User ngetik cepat, API call baru jalan 500ms setelah berhenti ngetik.",
    link: "/ui-search",
  },
  {
    id: 19,
    title: "📜 Infinite Scroll",
    level: "advanced",
    desc: "UI Mocking (IntersectionObserver). Load data baru saat user scroll sampai elemen terbawah.",
    link: "/ui-infinite",
  },
  {
    id: 20,
    title: "🖱️ Drag and Drop List",
    level: "advanced",
    desc: "UI Complex Event. Test urutan item berubah saat item A di-drag ke posisi item B.",
    link: "/ui-dnd",
  },
  */
];

const HomePage = () => {
  return (
    <div className="grow grid place-items-center">
      <div className="space-y-12 max-w-4xl">
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
    </div>
  );
};

export default HomePage;
