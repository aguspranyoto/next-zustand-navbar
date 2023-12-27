"use client";
import { buttonVariants } from "@/components/ui/button";
import { useStore } from "@/lib/store";

const Bears = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 shadow-xl rounded-lg dark:border-gray-700 mt-14">
        <div>Bears</div>
        <h1>{bears} around here...</h1>
        <div className="flex gap-4 py-6">
          <button className={buttonVariants()} onClick={increasePopulation}>
            increase
          </button>
          <button className={buttonVariants()} onClick={decreasePopulation}>
            decrease
          </button>
          <button className={buttonVariants()} onClick={removeAllBears}>
            kill all bears
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bears;
