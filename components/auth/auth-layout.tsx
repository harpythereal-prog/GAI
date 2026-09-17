import { FileText, Sparkles, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-base">
      <div className="hidden flex-col bg-elevated px-16 py-12 lg:flex lg:w-1/2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-brand" />
          <span className="text-base font-semibold text-copy-primary">
            Ghost AI
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-10">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-copy-primary">
              Design systems at the speed of thought.
            </h1>
            <p className="mt-4 text-sm text-copy-secondary">
              Describe your architecture in plain English. Ghost AI maps it to
              a shared canvas your whole team can refine in real time.
            </p>
          </div>

          <ul className="max-w-md space-y-5">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-brand">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-copy-primary">
                    {title}
                  </p>
                  <p className="text-sm text-copy-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-copy-faint">
          © {new Date().getFullYear()} Ghost AI. All rights reserved.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  )
}
