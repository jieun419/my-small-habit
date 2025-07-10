import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkDownViewer = ({ markdownContent }: { markdownContent: string }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>;
};

export default MarkDownViewer;
