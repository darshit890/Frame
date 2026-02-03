import { client } from '@/sanity/lib/client';
import { projectQuery, projectsQuery } from '@/sanity/lib/queries';
import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText, PortableTextComponents } from 'next-sanity';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

export const revalidate = 60;

// Portable Text Components
const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-black mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-black mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-black mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-black mt-6 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 mb-4 text-gray-600 space-y-2">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline font-medium">
          {children}
        </a>
      );
    },
  },
};

// Header Component
const ProjectHeader = ({ title, category }: { title: string, category?: string }) => {
  return (
    <section className="bg-background pt-32 lg:pt-40 pb-20 text-center font-sans relative overflow-hidden">
      <BackgroundEffect />
      <FadeIn>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium flex-wrap">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary truncate max-w-[200px]">{title}</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await client.fetch(projectQuery, { slug });
  
  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <ProjectHeader title={project.title} category={project.categories?.[0]?.title} />
      <Marquee />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            {/* Main Image */}
            <div className="relative h-[300px] lg:h-[600px] w-full rounded-3xl overflow-hidden mb-12 bg-gray-200 shadow-2xl">
              {project.mainImage?.asset?.url ? (
                <Image
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.alt || project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                  No Image
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Sidebar / Info */}
              <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
                <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
                   <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-4">Project Info</h3>
                   
                   {project.client && (
                     <div>
                       <p className="text-sm text-gray-400 mb-1">Client</p>
                       <p className="text-black font-medium">{project.client}</p>
                     </div>
                   )}
                   
                   {project.year && (
                     <div>
                       <p className="text-sm text-gray-400 mb-1">Year</p>
                       <p className="text-black font-medium">{project.year}</p>
                     </div>
                   )}
                   
                   {project.categories && project.categories.length > 0 && (
                     <div>
                       <p className="text-sm text-gray-400 mb-1">Category</p>
                       <div className="flex flex-wrap gap-2">
                         {project.categories.map((cat: any) => (
                           <span key={cat._id} className="text-black font-medium">{cat.title}</span>
                         ))}
                       </div>
                     </div>
                   )}

                   {project.link && (
                     <div className="pt-4">
                       <a 
                         href={project.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-block w-full text-center bg-primary text-black font-bold py-3 rounded-full hover:bg-primary/90 transition-colors"
                       >
                         Visit Live Site
                       </a>
                     </div>
                   )}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-black mb-6">Project Overview</h2>
                {project.description && (
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                )}
                
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl">
                  {project.body ? (
                    <PortableText value={project.body} components={ptComponents} />
                  ) : (
                    <p className="text-gray-500 italic">No detailed content available for this project.</p>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
