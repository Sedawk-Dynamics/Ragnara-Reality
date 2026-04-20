const IMAGE_ALIASES: Record<string, string> = {
  "/regnara-hero-apartments.jpg": "/luxury-residential-apartment-complex.jpg",
  "/regnara-about-team.jpg": "/team-collaboration-construction.avif",
  "/regnara-township.jpg": "/modern-gated-community-residential-development-aer.jpg",
  "/regnara-commercial.jpg": "/modern-commercial-office-tower-glass-facade.jpg",
  "/regnara-investment.jpg": "/project-management-planning-blueprint-coordination.jpg",
  "/regnara-construction-site.jpg": "/modern-construction-building-with-workers-and-equi.jpg",
  "/regnara-plots.jpg": "/contemporary-housing-society-with-landscaped-garde.jpg",
  "/regnara-office.jpg": "/modern-commercial-office-tower-glass-facade.jpg",
  "/regnara-apartment-interior.jpg": "/interior-design-modern-living-space-decoration.jpg",
  "/regnara-mission.jpg": "/mega-menu-mission.jpg",
  "/regnara-logo.png": "/logo.png",
  "/bridge-infrastructure-construction-steel-structure.jpg": "/highway-bridge-infrastructure-construction.jpg",
  "/concrete-bridge-over-river-infrastructure-developm.jpg": "/modern-highway-bridge-transportation-infrastructur.jpg",
  "/construction-materials-cement-steel-warehouse.jpg": "/construction-materials-warehouse-with-cement-bags-.jpg",
  "/beautiful-modern-renovated-living-room-fresh-paint.jpg": "/interior-design-modern-living-space-decoration.jpg",
  "/bathroom-renovation-modern-tiles-fixtures-waterpro.jpg": "/interior-design-modern-living-space-decoration.jpg",
  "/complete-home-renovation-modern-interior-design-be.jpg": "/interior-design-modern-living-space-decoration.jpg",
  "/regnara-founder.jpg": "/placeholder-user.jpg",
  "/regnara-testimonials-bg.jpg": "/luxury-modern-villa-with-pool-3d-architectural-vis.jpg",
}

export const DEFAULT_SITE_IMAGE = "/placeholder.jpg"

export function resolveSiteImage(src?: string | null, fallback = DEFAULT_SITE_IMAGE) {
  if (!src) {
    return fallback
  }

  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src
  }

  return IMAGE_ALIASES[src] ?? src
}
