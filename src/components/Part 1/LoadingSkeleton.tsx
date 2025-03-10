import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="border rounded-lg shadow-md m-2 p-4 w-64 bg-white h-[250px]">
      <div className="w-full flex justify-center items-center">
        <Skeleton circle width={64} height={64} />
      </div>
      <Skeleton width="70%" height={20} className="mt-4 mx-auto" />
      <Skeleton width="50%" height={20} className="mt-2 mx-auto" />
      <Skeleton width="40%" height={32} className="mt-4 mx-auto" />
    </div>
  );
};

export default LoadingSkeleton;
