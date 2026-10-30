# Search indexing after launch

The current site at `https://vaultyn.com/` is the source of truth. An older unrelated page may remain in search-engine caches until each crawler revisits the domain.

After publishing a website update:

1. Open Google Search Console for `vaultyn.com`, verify the domain property, inspect the home page and request indexing.
2. Submit `https://vaultyn.com/sitemap-index.xml` in Search Console.
3. Open Bing Webmaster Tools, import or verify the same domain, submit the same sitemap and request indexing for the home page.
4. Recheck the indexed title, description and screenshot after the crawlers refresh. Do not use a temporary removal request unless an obsolete URL still exposes sensitive or harmful content.
5. Repeat the request for the English home page (`/en/`) if international search results remain stale.

Search-engine cache updates are controlled by Google and Bing, so publication does not guarantee an immediate refresh.
