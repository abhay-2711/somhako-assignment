import HomePanel from "@/components/HomePanel/HomePanel";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center'>
        <div className='h-screen'>
          <HomePanel />
        </div>
        <div className='absolute h-screen w-full flex flex-col z-10'>
          <Main />
        </div>
      </div>
    </main>
  );
}