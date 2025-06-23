const Loader = ({ h = 'h-16', w = 'w-16' ,color='blue-500'}) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full ${h} ${w} border-t-4 border-b-4 border-${color}`}></div>
    </div>
  );
};

export default Loader;
