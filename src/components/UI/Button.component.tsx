type TProps = {
  text: string;
};

/**
 * Common button component used by several pages
 *
 * @param {Object} children Text passed into the button
 */

function Button({ text }: TProps) {
  return (
    <button
      type="submit"
      className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600">
      {text}
    </button>
  );
}

export default Button;