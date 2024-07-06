const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 h-screen">
      <div className="w-10 h-10 border-2 border-t-8 border-gray-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
