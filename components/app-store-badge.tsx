import Link from "next/link"

interface AppStoreBadgeProps {
  href: string
  type: "apple" | "google"
}

export function AppStoreBadge({ href, type }: AppStoreBadgeProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="app-store-badge bg-black border border-gray-700 rounded-xl px-6 py-3 flex items-center gap-3 hover:border-white transition-all hover:scale-105 hover:shadow-glow button-animate">
        <div className="text-white rotate-animation">
          {type === "apple" ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.0449 12.4896C17.0339 10.5347 18.0989 9.2547 19.2449 8.4447C18.3999 7.2147 17.0499 6.4347 15.5649 6.3447C14.0099 6.2547 12.3649 7.3047 11.7999 7.3047C11.1949 7.3047 9.76989 6.3897 8.60489 6.3897C6.49989 6.4197 4.22489 8.0547 4.22489 11.3997C4.22489 12.4797 4.42489 13.5997 4.82489 14.7597C5.36489 16.3047 7.01989 19.9647 8.75989 19.9047C9.71989 19.8747 10.3849 19.1547 11.6349 19.1547C12.8399 19.1547 13.4549 19.9047 14.5449 19.9047C16.2999 19.8747 17.7849 16.5447 18.2949 14.9947C15.7649 13.7997 17.0449 12.5247 17.0449 12.4896Z"
                fill="white"
              />
              <path
                d="M14.3999 5.0249C15.1399 4.1349 15.5649 2.9399 15.4449 1.7499C14.3849 1.8099 13.1399 2.4399 12.3699 3.3299C11.6699 4.1349 11.1549 5.3549 11.2949 6.5149C12.4549 6.6049 13.6299 5.9399 14.3999 5.0249Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
              <path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
          )}
        </div>
        <div className="text-left">
          <div className="text-lg font-semibold">{type === "apple" ? "App Store" : "Google Play"}</div>
        </div>
      </div>
    </Link>
  )
}
