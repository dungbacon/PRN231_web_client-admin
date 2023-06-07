import React from "react";
import DOMPurify from "dompurify";

const StringToHtml = ({ input = String }) => {
  const htmlString = input;
  const markup = { __html: DOMPurify.sanitize(htmlString) };
  return <div dangerouslySetInnerHTML={markup} />;
};

export default StringToHtml;
