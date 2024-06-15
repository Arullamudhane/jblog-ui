import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../App.css"; // Ensure your CSS file is imported

const uploadImageCallBack = (file, retryCount = 3) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 0b67c60ba1f5f8d"); // Replace 'XXXXX' with your Imgur Client ID
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        const imageUrl = response.data.link;
        // Insert the image into the editor
        resolve({ data: { link: imageUrl } });
      } else {
        if (xhr.status === 429 && retryCount > 0) {
          // Retry the request after a delay
          setTimeout(() => {
            uploadImageCallBack(file, retryCount - 1)
              .then(resolve)
              .catch(reject);
          }, 5000); // 5 second delay before retrying
        } else {
          reject(response);
        }
      }
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
};

function MyEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState("");

  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(rawContentState);
    setConvertedContent(html);
  }, [editorState]);

  const createMarkup = (html) => {
    // Add CSS styles for blockquote and code elements
    const styledHtml = `
      <style>
        blockquote {
          border-left: 3px solid #000;
          margin: 0 0 1em;
          padding: 0 1em;
        }
        pre {
          background-color: #f0f0f0;
          padding: 10px;
          border-left: 4px solid black;
          overflow-x: auto;
        }
      </style>
      ${html}
    `;
    return {
      __html: DOMPurify.sanitize(styledHtml),
    };
  };

  console.log(convertedContent);
  return (
    <div className='qq'>
      <header className='App-header2'>Rich Text Editor Example</header>
      <Editor
        toolbar={{
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: (file) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  resolve({
                    data: {
                      url: reader.result,
                    },
                  });
                };

                reader.onerror = (reason) => reject(reason);

                reader.readAsDataURL(file);
              });
            },
            previewImage: true,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: "auto",
              width: "auto",
            },
          },
          blockType: {
            inDropdown: true,
            options: [
              "Normal",
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "H6",
              "Blockquote",
              "Code",
              "HorizontalRule", // Add HorizontalRule option
            ],
          },
          fontFamily: {
            options: [
              "Roboto",
              "Open Sans",
              "Lato",
              "Montserrat",
              "Poppins",
              "Source Sans Pro",
              "Raleway",
              "Tiny5",
              "Noto Sans",
              "Ubuntu",
              "Playfair Display",
              "Merriweather",
              "Nunito",
              "PT Sans",
              "Quicksand",
              "Inter",
              "Work Sans",
              "Cabin",
              "Bebas Neue",
              "Oswald",
              "Rubik",
              "Creepster",
            ],
          },
          colorPicker: {
            colors: [
              "#000000",
              "#ffffff",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#33cc33",
              "#0099ff",
              "#9900cc",
              "#ffccff",
              "#cccccc",
              "#660000",
              "#ff6600",
              "#ffcc00",
              "#339966",
              "#0066cc",
              "#663399",
              "#ff99cc",
              "#999999",
              "#993300",
              "#ff3300",
              "#ffcc66",
              "#99cc00",
              "#006699",
              "#993366",
              "#cc6699",
              "#666666",
              "#663300",
              "#cc3300",
              "#cc9900",
              "#66cc00",
              "#3366cc",
              "#cc33cc",
              "#ffcc99",
              "#333333",
              "#660033",
              "#ff3366",
              "#ff9966",
              "#99cc33",
              "#336699",
              "#660066",
              "#ff99ff",
              "#cccc66",
              "#333300",
              "#cc6633",
              "#996633",
              "#669933",
              "#336633",
              "#663366",
              "#cc6699",
              "#9999cc",
              "#666699",
              "#6699cc",
              "#6699ff",
              "#33ccff",
              "#99ccff",
              "#66ccff",
            ],
          },
          fontSize: {
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
          },
        }}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName='wrapper-class'
        editorClassName='editor-class'
        toolbarClassName='toolbar-class'
        blockStyleFn={(contentBlock) => {
          const type = contentBlock.getType();
          if (type === "blockquote") {
            return "custom-blockquote";
          }
          return "";
        }}
        customStyleMap={{
          "code-block": {
            borderLeft: "4px solid black", // Add a left border to code blocks
            paddingLeft: "10px", // Add padding to separate the text from the border
          },
        }}
      />
      <div
        className='preview'
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </div>
  );
}

export default MyEditor;
