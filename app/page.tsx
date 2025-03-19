import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Master Javascript Series",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    tags: ["NextJS", "ECMA Script Arrays"],
    publishDate: "Jan 24 2025",
    readTime: "2 mins",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Master Javascript Series",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    tags: ["NextJS", "ECMA Script Arrays"],
    publishDate: "Jan 24 2025",
    readTime: "2 mins",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-[#334155] shadow-[16px_16px_24px_rgba(0,0,0,0.24)] transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover bg-[#1E293B] transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5 items-center">
                  {article.tags.map((tag, index) => (
                    <div key={`${article.id}-${tag}`} className="flex items-center">
                      <span className="text-sm text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
                        {tag}
                      </span>
                      {index < article.tags.length - 1 && (
                        <span className="text-sm text-[#64748B] mx-1.5">•</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <h2 className="text-[32px] leading-[38px] font-medium text-[#F1F5F9] group-hover:text-white transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-base leading-[26px] tracking-[0.02em] text-[#94A3B8]">
                    {article.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                  <span>Published on {article.publishDate}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}