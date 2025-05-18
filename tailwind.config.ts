import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				green: {
					DEFAULT: '#27AE60',
					darker: '#219653',
					dim: 'rgba(39, 174, 96, 0.7)',
					light: 'rgba(39, 174, 96, 0.3)'
				},
				graphite: {
					DEFAULT: '#2C3E50',
					lighter: '#34495E',
					card: '#2C3E50'
				},
				gold: {
					DEFAULT: '#F1C40F',
					dim: 'rgba(241, 196, 15, 0.7)',
					light: 'rgba(241, 196, 15, 0.3)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'green-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 12px #27AE60, 0 0 24px rgba(39, 174, 96, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 18px #27AE60, 0 0 36px rgba(39, 174, 96, 0.5)'
					}
				},
				'gold-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 12px #F1C40F, 0 0 24px rgba(241, 196, 15, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 18px #F1C40F, 0 0 36px rgba(241, 196, 15, 0.5)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'green-pulse': 'green-pulse 2s infinite',
				'gold-pulse': 'gold-pulse 2s infinite'
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
