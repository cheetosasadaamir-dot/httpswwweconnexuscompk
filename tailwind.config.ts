import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        body: ["Manrope", "sans-serif"],
        splash: ["Michroma", "sans-serif"],
        script: ["Great Vibes", "cursive"],
      },
      letterSpacing: {
        'tight-premium': '-0.04em',
        'data': '0.1em',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Infinite Horizon Theme Colors
        space: {
          void: "hsl(var(--space-void))",
          deep: "hsl(var(--space-deep))",
          base: "hsl(var(--space-base))",
          elevated: "hsl(var(--space-elevated))",
          surface: "hsl(var(--space-surface))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          "cyan-glow": "hsl(var(--neon-cyan-glow))",
          gold: "hsl(var(--neon-gold))",
          "gold-muted": "hsl(var(--neon-gold-muted))",
          magenta: "hsl(var(--neon-magenta))",
        },
        // Legacy support for existing components
        charcoal: {
          base: "hsl(var(--charcoal-base))",
          deep: "hsl(var(--charcoal-deep))",
          light: "hsl(var(--charcoal-light))",
          elevated: "hsl(var(--charcoal-elevated))",
          cyan: "hsl(var(--charcoal-cyan))",
          "cyan-glow": "hsl(var(--charcoal-cyan-glow))",
          gold: "hsl(var(--charcoal-gold))",
          "gold-muted": "hsl(var(--charcoal-gold-muted))",
          foreground: "hsl(var(--charcoal-foreground))",
          silver: "hsl(var(--charcoal-silver))",
          muted: "hsl(var(--charcoal-muted))",
        },
        navy: {
          deep: "hsl(var(--navy-deep))",
          base: "hsl(var(--navy-base))",
          light: "hsl(var(--navy-light))",
        },
        indigo: {
          glow: "hsl(var(--indigo-glow))",
        },
        silver: {
          DEFAULT: "hsl(var(--silver))",
          bright: "hsl(var(--silver-bright))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.2)" },
          "50%": { boxShadow: "0 0 50px hsl(var(--neon-cyan) / 0.5)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "nebula-drift": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(20px) translateY(-10px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        // Premium spring animations
        "spring-bounce": {
          "0%": { transform: "translateY(0) scale(1)" },
          "40%": { transform: "translateY(-8px) scale(1.02)" },
          "60%": { transform: "translateY(-4px) scale(1.01)" },
          "80%": { transform: "translateY(-2px) scale(1.005)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "spring-scale": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "75%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
        "data-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "draw-line": "draw-line 2s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        orbit: "orbit 20s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        "nebula-drift": "nebula-drift 30s ease-in-out infinite",
        "spring-bounce": "spring-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "spring-scale": "spring-scale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "data-pulse": "data-pulse 2s ease-in-out infinite",
      },
      spacing: {
        compact: "0.25rem",
      },
      boxShadow: {
        "neon-cyan": "0 0 30px hsl(var(--neon-cyan) / 0.3)",
        "neon-gold": "0 0 30px hsl(var(--neon-gold) / 0.3)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
