"use client"

import Image, { type ImageProps } from "next/image"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { DEFAULT_SITE_IMAGE, resolveSiteImage } from "@/lib/site-assets"

type SiteImageProps = ImageProps & {
  fallbackSrc?: string
  wrapperClassName?: string
  showSkeleton?: boolean
}

export function SiteImage({
  src,
  alt,
  className,
  fallbackSrc = DEFAULT_SITE_IMAGE,
  wrapperClassName,
  showSkeleton = true,
  onError,
  onLoad,
  ...props
}: SiteImageProps) {
  const initialSrc = useMemo(() => resolveSiteImage(typeof src === "string" ? src : undefined, fallbackSrc), [fallbackSrc, src])
  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [isLoaded, setIsLoaded] = useState(false)
  const isFillImage = "fill" in props && Boolean(props.fill)

  return (
    <div className={cn(isFillImage ? "relative size-full overflow-hidden" : "relative inline-block overflow-hidden", wrapperClassName)}>
      {showSkeleton && !isLoaded ? <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" /> : null}
      <Image
        {...props}
        alt={alt}
        src={imageSrc}
        className={cn(className, !isLoaded && "opacity-0", isLoaded && "opacity-100")}
        unoptimized={true}
        onLoad={(event) => {
          setIsLoaded(true)
          onLoad?.(event)
        }}
        onError={(event) => {
          const nextFallback = resolveSiteImage(fallbackSrc, DEFAULT_SITE_IMAGE)
          if (imageSrc !== nextFallback) {
            setImageSrc(nextFallback)
            setIsLoaded(false)
          } else {
            setIsLoaded(true)
          }
          onError?.(event)
        }}
      />
    </div>
  )
}
