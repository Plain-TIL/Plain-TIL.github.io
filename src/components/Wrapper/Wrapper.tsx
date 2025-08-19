import { Suspense } from "react";

const Loading = () => {
  return (
    <div className="flex flex-col w-full inset-shadow-sm/15 rounded-2xl p-10 gap-4">
      <p>Loading....</p>
    </div>
  );
};

export const Wrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};