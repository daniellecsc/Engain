export default function EngainLogo() {
  return (
    <div className='relative flex items-center justify-center min-h-screen bg-[#f8e2dd]'>
      {/* Optional grid background */}
      <div className='absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:20px_20px]' />

      {/* Logo */}
      <div className='relative h-[300px] w-[300px]'>
        {/* Top circle */}
        <div className='absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-[#ff5a36]' />

        {/* Left circle */}
        <div className='absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#ff5a36]' />

        {/* Right circle */}
        <div className='absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[#ff5a36]' />

        {/* Left connector */}
        <div className='absolute left-[72px] top-[90px] h-24 w-20 rotate-35 rounded-full bg-[#ff5a36]' />

        {/* Right connector */}
        <div className='absolute right-[72px] top-[90px] h-24 w-20 rotate-[-35deg] rounded-full bg-[#ff5a36]' />

        {/* Center cutout */}
        <div className='absolute left-1/2 top-[115px] h-16 w-16 -translate-x-1/2 rounded-full bg-[#f8e2dd]' />

        {/* Bottom-right hole */}
        <div className='absolute bottom-[20px] right-[20px] h-10 w-10 rounded-full bg-[#f8e2dd]' />
      </div>
    </div>
  );
}
