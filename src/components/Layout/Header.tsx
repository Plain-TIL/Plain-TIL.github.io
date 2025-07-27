const Header = () => {
  return (
    <header className="flex gap-2 w-full h-1/10 px-4 py-4 items-center">
      <img src="/Plain.png" alt="Plain 로고" className="rounded-md w-[30px] h-[30px] md:w-[40px] md:h-[40px]"/>
      <span
        className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#3BB2F4] to-[#4CFAE0]"
      >
        Plain TIL
      </span>
    </header>
  )
}

export default Header;