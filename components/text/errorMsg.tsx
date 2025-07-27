interface ErrorMsgProps {
  errorMsg: string;
}

const ErrorMsg = ({ errorMsg }: ErrorMsgProps) => {
  return <p className="py-2 text-center text-sm text-red-400">{errorMsg}</p>;
};

export default ErrorMsg;
