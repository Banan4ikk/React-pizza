import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
   <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <circle cx="134" cy="120" r="120" />
      <rect x="-1" y="278" rx="3" ry="3" width="280" height="30" />
      <rect x="-1" y="318" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="422" rx="4" ry="4" width="95" height="30" />
      <rect x="152" y="410" rx="30" ry="30" width="127" height="47" />
   </ContentLoader>
)

export default Loader