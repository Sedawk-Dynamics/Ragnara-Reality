// Image optimization helpers for better LCP and performance
export const getOptimizedImageProps = (
  src: string,
  alt: string,
  options: {
    priority?: boolean
    width?: number
    height?: number
    quality?: number
  } = {},
) => {
  return {
    src,
    alt,
    loading: options.priority ? "eager" : "lazy",
    decoding: "async",
    width: options.width,
    height: options.height,
    quality: options.quality || 75,
  }
}

// Critical images that should load immediately
export const CRITICAL_IMAGES = [
  "/logo.png",
  "/india-run-sports-billboard.jpg",
]

// Preload hint generator
export const generatePreloadHints = () => {
  return CRITICAL_IMAGES.map((img) => ({
    rel: "preload",
    as: "image",
    href: img,
  }))
}
