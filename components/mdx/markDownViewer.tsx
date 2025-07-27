import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkDownViewerProps {
  markdownContent: string;
}

const MarkDownViewer = ({ markdownContent }: MarkDownViewerProps) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>;
};

export default MarkDownViewer;
