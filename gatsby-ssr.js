import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="google-fonts-playfair"
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Libre+Baskerville&display=swap"
      rel="stylesheet"
    />,
  ])
}
