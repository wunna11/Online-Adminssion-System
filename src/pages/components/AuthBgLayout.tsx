export default function AuthBgLayout({ children }: { children: any }) {
    return (
      <div className="bg-cover bg-no-repeat bg-[url('/img/auth/authbg.png')] sm:bg-[url('/img/auth/authbg.png')]">
        <div className="flex w-full h-screen items-center justify-center bg-black/60">
          <div className="flex justify-center self-center">
            <div className="rounded-xl bg-white-50 p-10 border border-gray-500/10 shadow-lg backdrop-blur-md max-sm:px-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }