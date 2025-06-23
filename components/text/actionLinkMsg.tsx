import Link from "next/link";

interface ActionLinkMsgProps {
  href: string;
  msg: string;
  linkMsg: string;
}

const ActionLinkMsg = ({ href, msg, linkMsg }: ActionLinkMsgProps) => {
  return (
    <div className="flex items-center justify-center gap-2 text-center text-sm">
      <span className="text-gray-500">{msg}</span>
      <Link href={href} className="text-gray-900">
        {linkMsg}
      </Link>
    </div>
  );
};

export default ActionLinkMsg;
