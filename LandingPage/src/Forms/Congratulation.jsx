export const CongratulationsScreen = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-white p-20 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
      <p className="text-gray-700 mb-6">
        You have successfully completed the form. Thank you for your time!
      </p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={onClose}
      >
        Finish
      </button>
    </div>
  );
};
