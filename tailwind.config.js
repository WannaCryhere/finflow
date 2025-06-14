/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1E40AF', // Deep professional blue - blue-800
        'primary-50': '#EFF6FF', // Very light blue - blue-50
        'primary-100': '#DBEAFE', // Light blue - blue-100
        'primary-500': '#3B82F6', // Medium blue - blue-500
        'primary-600': '#2563EB', // Darker blue - blue-600
        'primary-700': '#1D4ED8', // Dark blue - blue-700
        
        // Secondary Colors
        'secondary': '#64748B', // Sophisticated slate gray - slate-500
        'secondary-50': '#F8FAFC', // Very light slate - slate-50
        'secondary-100': '#F1F5F9', // Light slate - slate-100
        'secondary-200': '#E2E8F0', // Light slate - slate-200
        'secondary-300': '#CBD5E1', // Medium light slate - slate-300
        'secondary-400': '#94A3B8', // Medium slate - slate-400
        'secondary-600': '#475569', // Dark slate - slate-600
        'secondary-700': '#334155', // Darker slate - slate-700
        'secondary-800': '#1E293B', // Very dark slate - slate-800
        'secondary-900': '#0F172A', // Darkest slate - slate-900
        
        // Accent Colors
        'accent': '#F59E0B', // Warm amber - amber-500
        'accent-50': '#FFFBEB', // Very light amber - amber-50
        'accent-100': '#FEF3C7', // Light amber - amber-100
        'accent-200': '#FDE68A', // Light amber - amber-200
        'accent-300': '#FCD34D', // Medium light amber - amber-300
        'accent-400': '#FBBF24', // Medium amber - amber-400
        'accent-600': '#D97706', // Dark amber - amber-600
        'accent-700': '#B45309', // Darker amber - amber-700
        
        // Background Colors
        'background': '#FAFBFC', // Soft off-white - gray-50
        'surface': '#FFFFFF', // Pure white - white
        
        // Text Colors
        'text-primary': '#1F2937', // Rich charcoal - gray-800
        'text-secondary': '#6B7280', // Medium gray - gray-500
        'text-muted': '#9CA3AF', // Light gray - gray-400
        
        // Status Colors
        'success': '#10B981', // Fresh green - emerald-500
        'success-50': '#ECFDF5', // Very light green - emerald-50
        'success-100': '#D1FAE5', // Light green - emerald-100
        'success-600': '#059669', // Dark green - emerald-600
        'success-700': '#047857', // Darker green - emerald-700
        
        'warning': '#F59E0B', // Amber warning - amber-500
        'warning-50': '#FFFBEB', // Very light amber - amber-50
        'warning-100': '#FEF3C7', // Light amber - amber-100
        'warning-600': '#D97706', // Dark amber - amber-600
        
        'error': '#EF4444', // Clear red - red-500
        'error-50': '#FEF2F2', // Very light red - red-50
        'error-100': '#FEE2E2', // Light red - red-100
        'error-600': '#DC2626', // Dark red - red-600
        'error-700': '#B91C1C', // Darker red - red-700
        
        // Border Colors
        'border': '#E5E7EB', // Light gray border - gray-200
        'border-light': '#F3F4F6', // Very light gray border - gray-100
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Inter', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'nav-primary': '16px',
        'nav-secondary': '14px',
      },
      spacing: {
        'sidebar': '240px',
        'header': '64px',
        'content-padding': '24px',
        'element-spacing': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elevation': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'hover': '200ms',
        'modal': '300ms',
        'sidebar': '300ms',
      },
      transitionTimingFunction: {
        'hover': 'ease-out',
        'modal': 'ease-in-out',
        'sidebar': 'ease-in-out',
      },
      zIndex: {
        'sidebar': '100',
        'header': '200',
        'dropdown': '300',
        'modal': '400',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}