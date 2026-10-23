// 帮助中心：按语言取文章、生成路由、界面文字
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export const HELP_UI: Record<Lang, { title: string; lead: string; search: string; prev: string; next: string; ask: string; askP: string }> = {
  zh: { title: '帮助中心', lead: '使用 Vaultyn 时常见的问题和操作方法。', search: '搜索帮助文章', prev: '上一篇', next: '下一篇', ask: '没找到答案？', askP: '发邮件到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>，我们会尽快回复。' },
  'zh-hant': { title: '說明中心', lead: '使用 Vaultyn 時常見的問題和操作方法。', search: '搜尋說明文章', prev: '上一篇', next: '下一篇', ask: '沒找到答案？', askP: '寄信到 <a href="mailto:support@vaultyn.com">support@vaultyn.com</a>，我們會盡快回覆。' },
  en: { title: 'Help Center', lead: 'How-tos and answers for using Vaultyn.', search: 'Search help articles', prev: 'Previous', next: 'Next', ask: 'Didn’t find an answer?', askP: 'Email <a href="mailto:support@vaultyn.com">support@vaultyn.com</a> and we’ll get back to you soon.' },
};
/** 某种语言的全部文章，按 order 排好 */
export async function helpArticles(lang: Lang) {
  return (await getCollection('help', e => e.id.startsWith(lang + '/'))).sort((a, b) => a.data.order - b.data.order);
}
export const slugOf = (e: CollectionEntry<'help'>) => e.id.split('/').pop()!;
/** 文章页的 getStaticPaths */
export async function helpPaths(lang: Lang) {
  return (await helpArticles(lang)).map(entry => ({ params: { slug: slugOf(entry) }, props: { entry } }));
}
