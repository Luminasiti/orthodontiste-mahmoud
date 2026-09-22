import type { Metadata } from "next";
import Header from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Header";
import Footer from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/Footer";
import CtaSection from "@/components/sites/dentipai-c7ba31ad/home-v1-8ad5662a/CtaSection";
import { blogPostsData, clinicInfo } from "@/data/clinicData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article non trouvé | Dr Mahmoud Qalalwa",
    };
  }

  return {
    title: `${post.title} | Dr Mahmoud Qalalwa Orthodontiste Tunis`,
    description: post.summary,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      authors: ["Dr Mahmoud Qalalwa"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#070707] font-plus-jakarta antialiased selection:bg-[#0e63f3] selection:text-white">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Article Header */}
        <article className="max-w-[900px] mx-auto px-5 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-[#0e63f3]">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0e63f3]">Blog</Link>
            <span>/</span>
            <span className="text-[#0e63f3] line-clamp-1">{post.title}</span>
          </nav>

          {/* Badge & Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#e7effe] text-[#0e63f3] text-xs font-bold px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{post.date}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">⏱ {post.readTime}</span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold text-[#070707] leading-[1.2] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3.5 pb-8 mb-8 border-b border-gray-100">
            <div className="w-11 h-11 rounded-full bg-[#0e63f3]/10 flex items-center justify-center text-[#0e63f3] font-bold">
              👨‍⚕️
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">{post.author}</div>
              <div className="text-xs text-gray-500">Spécialiste en Orthodontie • FMDM Monastir</div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden shadow-lg mb-10 border border-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Summary Lead */}
          <div className="p-6 bg-[#f8faff] border-l-4 border-[#0e63f3] rounded-r-2xl text-[17px] text-gray-700 font-medium leading-relaxed mb-8">
            {post.summary}
          </div>

          {/* Article Body Content */}
          <div className="space-y-6 text-[16px] sm:text-[17px] text-[#444444] leading-[1.8]">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Doctor Note Box */}
          <div className="mt-12 p-7 sm:p-8 bg-[#e7effe]/60 rounded-3xl border border-[#cfe0fd] flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0e63f3] text-white flex items-center justify-center text-3xl shrink-0">
              💡
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                Le Conseil du Dr Mahmoud Qalalwa
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Une consultation précoce permet d'anticiper les anomalies et d'établir une prise en charge sur-mesure. N'attendez pas qu'une malocclusion s'aggrave.
              </p>
              <a
                href={clinicInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0e63f3] hover:bg-[#070707] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <span>Poser une question au docteur sur WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Article Keywords */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-gray-400 uppercase mr-2">Mots-clés :</span>
            {post.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              >
                #{kw}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-[#f8faff] border-t border-gray-200/70">
            <div className="max-w-[900px] mx-auto px-5">
              <h2 className="text-2xl font-bold text-[#070707] mb-8">
                Autres Guides & Conseils à Découvrir
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-md hover:border-[#0e63f3] transition-all group"
                  >
                    <span className="text-xs font-bold text-[#0e63f3] uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#0e63f3] transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {rel.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
