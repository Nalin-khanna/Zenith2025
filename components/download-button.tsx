"use client"

export function DownloadButton() {
  return (
    <button 
      onClick={() => window.open('/brochure.pdf', '_blank')}
      className="group relative px-6 py-3 bg-white/90 backdrop-blur-sm border border-violet-500/50 
      rounded-lg font-press-start text-sm text-violet-600 transition-all duration-300 
      hover:text-violet-800 hỏ̉̉̉̉̉ver:border-violet-600 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-violet-600/5 
        group-hover:from-violet-500/10 group-hover:to-violet-600/10 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-violet-500 to-violet-600 
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="relative flex items-center space-x-2">
        <span>Download Brochure</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-y-1 transition-transform duration-300" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </button>
  )
}