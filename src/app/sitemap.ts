import { MetadataRoute } from 'next';
import { API_BASE_URL as API_URL } from '@/config';

const BASE_URL = 'https://gajanantraders.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/company-profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/shipping-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    // Fetch active harvesters dynamically to append to sitemap
    const res = await fetch(`${API_URL}/api/harvesters`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const harvesters = await res.json();
      dynamicRoutes = harvesters.map((h: any) => ({
        url: `${BASE_URL}/products/${h.slug || h._id}`,
        lastModified: new Date(h.updatedAt || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error('Sitemap harvester fetching error:', err);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
