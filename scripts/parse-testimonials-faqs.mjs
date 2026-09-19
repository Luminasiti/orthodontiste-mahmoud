import fs from 'fs';
import path from 'path';

const RESEARCH_DIR = path.resolve('docs/research/dentipai-c7ba31ad/home-v1-8ad5662a');

// 2. FAQs
const faqData = JSON.parse(fs.readFileSync(path.join(RESEARCH_DIR, 'section-7-faq-section.json'), 'utf-8'));
const faqItemsRaw = faqData.rawHTML.split('class="faq-block');
const faqs = [];
for (let i = 1; i < faqItemsRaw.length; i++) {
  const chunk = faqItemsRaw[i];
  const qMatch = chunk.match(/class="[^"]*faq-title[^"]*">([\s\S]*?)<\/div>/);
  const aMatch = chunk.match(/class="[^"]*faq-body[^"]*"[^>]*>([\s\S]*?)<\/nav>/);
  if (qMatch) {
    const q = qMatch[1].replace(/<[^>]+>/g, '').trim();
    const a = aMatch ? aMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    faqs.push({ question: q, answer: a });
  }
}
console.log('FAQs:');
console.log(JSON.stringify(faqs, null, 2));

// 3. Blog posts
const blogData = JSON.parse(fs.readFileSync(path.join(RESEARCH_DIR, 'section-8-blog-section.json'), 'utf-8'));
const blogItemsRaw = blogData.rawHTML.split('class="blog-item"');
const blogs = [];
for (let i = 1; i < blogItemsRaw.length; i++) {
  const chunk = blogItemsRaw[i];
  const imgMatch = chunk.match(/src="([^"]+)"/);
  const titleMatch = chunk.match(/class="[^"]*blog-title[^"]*"[^>]*>([\s\S]*?)<\/h\d>/);
  const categoryMatch = chunk.match(/class="[^"]*blog-tag[^"]*"[^>]*>([\s\S]*?)<\/[a-z]+>/) || chunk.match(/class="[^"]*blog-meta[^"]*"[^>]*>([\s\S]*?)<\/[a-z]+>/);
  const text = chunk.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  blogs.push({
    image: imgMatch ? imgMatch[1] : '',
    rawText: text
  });
}
console.log('Blogs:');
console.log(JSON.stringify(blogs, null, 2));
